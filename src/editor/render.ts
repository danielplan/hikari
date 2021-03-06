export interface Settings {
    invert: HTMLInputElement,
    bw: HTMLInputElement
}

export interface Controls {
    brightness: HTMLInputElement;
    contrast: HTMLInputElement;
    saturation: HTMLInputElement;
    light: HTMLInputElement;
    dark: HTMLInputElement;
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

export function renderImage(shadowCanvas: HTMLCanvasElement, shadowCanvasContext: CanvasRenderingContext2D,
    settings: Settings, controls: Controls, worker: Worker) {
    const settingsValues = new Uint8Array(Object.values(settings).map((c: HTMLInputElement) => c.checked ? 1 : 0));
    const controlValues = new Uint8Array(Object.values(controls).map((c: HTMLInputElement) => (Number.parseInt(c.value) + 100)));
    const imageData = shadowCanvasContext.getImageData(0, 0, shadowCanvas.width, shadowCanvas.height);

    worker.postMessage({ settingsValues, controlValues, imageData });
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
    canvasContext.drawImage(img, 0, 0, width, height);

    worker.onmessage = (e) => {
        const data = e.data;
        canvasContext.putImageData(data, 0, 0);
        downloadCanvasImage(canvas);
    }
    renderImage(canvas, canvasContext, settings, controls, worker);

}

function downloadCanvasImage(canvas: HTMLCanvasElement) {
    const dataURL = canvas.toDataURL('image/jpg');
    // const newTab = window.open('about:blank', 'image from canvas');
    // newTab!.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
    const link = document.createElement('a');
    link.download = 'hikari-export.jpg';
    link.href = dataURL;
    link.click();
    link.remove();
}