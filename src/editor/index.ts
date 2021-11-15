import { createRangeControl } from "./controls";
import { renderImage } from "./render";

const imageCanvas = document.createElement('canvas');
const canvasContext = imageCanvas.getContext('2d')!;

export async function renderEditor(root: HTMLElement, files: FileList) {
    if (files && files[0]) {
        root.innerHTML = '';
        const file = files[0];
        const imgData = await getBase64(file);
        root.appendChild(imageCanvas);
        const img = new Image();

        img.src = imgData.toString();
        img.onload = () => {
            const dimensions = resizeImage(img.width, img.height);
            imageCanvas.setAttribute('width', dimensions.width.toString());
            imageCanvas.setAttribute('height', dimensions.height.toString());
            canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
            renderControls(root, img);
        }
    }
}


function renderControls(root: HTMLElement, img: HTMLImageElement) {
    const controls = {
        brightness: createRangeControl(-100, 100, 'Brightness', 0, root),
        contrast: createRangeControl(-100, 100, 'Contrast', 0, root),
        saturation: createRangeControl(-100, 100, 'Saturation', 0, root),
        redSaturation: createRangeControl(-100, 100, 'Red Saturation', 0, root),
        orangeSaturation: createRangeControl(-100, 100, 'Orange Saturation', 0, root),
        yellowSaturation: createRangeControl(-100, 100, 'Yellow Saturation', 0, root),
        greenSaturation: createRangeControl(-100, 100, 'Green Saturation', 0, root),
        tealSaturation: createRangeControl(-100, 100, 'Teal Saturation', 0, root),
        cyanSaturation: createRangeControl(-100, 100, 'Cyan Saturation', 0, root),
        blueSaturation: createRangeControl(-100, 100, 'Blue Saturation', 0, root),
        purpleSaturation: createRangeControl(-100, 100, 'Purple Saturation', 0, root),
        magentaSaturation: createRangeControl(-100, 100, 'Magenta Saturation', 0, root),
    }

    Object.values(controls).forEach((v) => {
        v.addEventListener('change', () => renderImage(img, imageCanvas, canvasContext, controls));
    });
}

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
