import { createCheckboxControl, createRangeControl } from "./controls";
import { renderImage, exportImage, Controls, Settings } from "./render";

const imageCanvas = document.createElement('canvas');
const shadowCanvas = document.createElement('canvas');
const canvasContext = imageCanvas.getContext('2d')!;
const shadowCanvasContext = shadowCanvas.getContext('2d')!;

export async function startEditor(root: HTMLElement, files: FileList) {
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
            shadowCanvas.setAttribute('width', dimensions.width.toString());
            shadowCanvas.setAttribute('height', dimensions.height.toString());
            shadowCanvasContext.drawImage(img, 0, 0, shadowCanvas.width, shadowCanvas.height);
            renderControls(root, img);
        }
    }
}

function createExportButton(root: HTMLElement, img: HTMLImageElement, settings: Settings, controls: Controls, worker: Worker) {
    const button = document.createElement('button');
    button.textContent = 'Export';
    button.onclick = () => exportImage(img, settings, controls, worker);
    root.appendChild(button);
}

function renderControls(root: HTMLElement, img: HTMLImageElement) {
    const settings = {
        invert: createCheckboxControl('Invert', root),
        bw: createCheckboxControl('Black & White', root),
    }
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

    const worker = new Worker('src/editor/worker.js', { type: 'module' });

    worker.postMessage({ load: true });

    const allControls = {
        ...settings,
        ...controls
    }
    createExportButton(root, img, settings, controls, worker);
    Object.values(allControls).forEach((v) =>
        v.addEventListener('change', () => renderImage(shadowCanvas, shadowCanvasContext, canvasContext, settings, controls, worker))
    );
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
