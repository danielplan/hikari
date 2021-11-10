import './styles/app.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;
const fileInput = document.createElement('input');
fileInput.setAttribute('type', 'file');
app.appendChild(fileInput);
fileInput.addEventListener('change', () => {
  if (fileInput.files && fileInput.files[0]) {
    fileInput.remove();
    const file = fileInput.files[0];
    getBase64(file).then((imgData) => {
      const canvas = document.createElement('canvas');
      app.appendChild(canvas);
      const context = canvas.getContext('2d')!;
      const img = new Image();

      img.src = imgData.toString();
      img.onload = () => {
        const dimensions = resizeImage(img.width, img.height);
        canvas.setAttribute('width', dimensions.width.toString());
        canvas.setAttribute('height', dimensions.height.toString());
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        const testSlider = document.createElement('input');
        testSlider.setAttribute('min', '-100');
        testSlider.setAttribute('max', '100');
        testSlider.setAttribute('type', 'range');
        testSlider.value = '0';
        app.append(testSlider);


        testSlider.onchange = () => {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const value = Number.parseInt(testSlider.value) * 0.5;
          for (let i = 0; i < imageData.data.length; i += 4) {
            if (value > 0) {
              const max = Math.max(imageData.data[0], imageData.data[1], imageData.data[2]);
              const additional = max * value / 100;
              imageData.data[i + 0] = imageData.data[i] + additional;        // R value
              imageData.data[i + 1] = imageData.data[i + 1] + additional;        // R value
              imageData.data[i + 2] = imageData.data[i + 2] + additional;        // R value
            } else {
              const min = Math.min(imageData.data[0], imageData.data[1], imageData.data[2]);
              const additional = (255 - min) * value / 100;
              imageData.data[i + 0] = imageData.data[i] + additional;        // R value
              imageData.data[i + 1] = imageData.data[i + 1] + additional;        // R value
              imageData.data[i + 2] = imageData.data[i + 2] + additional;        // R value

            }
          }
          context.putImageData(imageData, 0, 0);
        }
      }



    });
  }
});


function getBase64(file: File) {
  return new Promise<String>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result ? reader.result.toString() : '');
    reader.onerror = error => reject(error);
  });
}


function resizeImage(imgWidth: number, imgHeight: number): { width: number, height: number } {
  const screenHeight = window.innerHeight * 0.5;
  const screenWidth = window.innerWidth * 0.5;
  let result;

  if (imgWidth > imgHeight) {
    result = {
      width: screenWidth,
      height: screenWidth * imgHeight / imgWidth
    }
  } else {
    result = {
      width: screenHeight * imgWidth / imgHeight,
      height: screenHeight,
    }
  }

  return result;
}
