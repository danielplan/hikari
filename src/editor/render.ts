export interface Settings {
    invert: HTMLInputElement,
    bw: HTMLInputElement
}

export interface Controls {
    brightness: HTMLInputElement;
    contrast: HTMLInputElement;
    saturation: HTMLInputElement;
    greenSaturation: HTMLInputElement;
    redSaturation: HTMLInputElement;
    orangeSaturation: HTMLInputElement;
    yellowSaturation: HTMLInputElement;
    tealSaturation: HTMLInputElement;
    cyanSaturation: HTMLInputElement;
    blueSaturation: HTMLInputElement;
    purpleSaturation: HTMLInputElement;
    magentaSaturation: HTMLInputElement;
}

export type renderFunction = (heapStart: number, settings: number[], controlValues: number[], length: number) => number;

export function renderImage(shadowCanvas: HTMLCanvasElement, shadowCanvasContext: CanvasRenderingContext2D, canvasContext: CanvasRenderingContext2D,
    settings: Settings, controls: Controls, worker: Worker) {
    const settingsValues = Object.values(settings).map((c: HTMLInputElement) => c.checked ? 1 : 0);
    const controlValues = Object.values(controls).map((c: HTMLInputElement) => Number.parseInt(c.value));
    const imageData = shadowCanvasContext.getImageData(0, 0, shadowCanvas.width, shadowCanvas.height);
    worker.postMessage({ settingsValues, controlValues, imageData });
    worker.onmessage = (e) => {
        const data = e.data;
        canvasContext.putImageData(data, 0, 0);
    }
}

export function exportImage(img: HTMLImageElement, settings: Settings, controls: Controls, worker: Worker) {
    const canvas = document.createElement('canvas');
    const imgWidth = img.width;
    const imgHeight = img.height;
    let width = 0;
    let height = 0;
    let value = 1920;
    if (imgWidth > imgHeight) {
        value = Math.min(value, imgWidth);
        width = value;
        height = imgHeight * value / imgWidth;
    } else {
        value = Math.min(value, imgHeight);
        height = value;
        width = imgWidth * value / imgHeight;
    }
    canvas.width = width;
    canvas.height = height;
    const canvasContext = canvas.getContext('2d')!;
    canvasContext.drawImage(img, 0, 0, canvas.width, canvas.height);
    renderImage(canvas, canvasContext, canvasContext, settings, controls, worker);
    worker.addEventListener('message', () => {
        const dataURL = canvas.toDataURL("image/jpg");
        const link = document.createElement('a');
        link.download = 'hikari-export.jpg';
        link.href = dataURL;
        link.click();
    });

}