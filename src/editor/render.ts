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

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D,
    settings: Settings, controls: Controls, render: renderFunction, Module: any) {

    const settingsValues = Object.values(settings).map((c: HTMLInputElement) => c.checked ? 1 : 0);

    const controlValues = Object.values(controls).map((c: HTMLInputElement) => Number.parseInt(c.value));
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);

    const cMemory = new Uint8Array(Module.HEAP8.buffer, 0, imageData.data.length);
    cMemory.set(imageData.data);
    render(0, settingsValues, controlValues, imageData.data.length);
    imageData.data.set(cMemory);

    canvasContext.putImageData(imageData, 0, 0);
}

export function exportImage(img: HTMLImageElement, settings: Settings, controls: Controls, render: renderFunction, Module: any) {
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
    canvasContext.drawImage(img, 0, 0, img.width, img.height);
    renderImage(img, canvas, canvasContext, settings, controls, render, Module);
    const dataURL = canvas.toDataURL("image/jpg");
    const link = document.createElement('a');
    link.download = 'hikari-export.jpg';
    link.href = dataURL;
    link.click();

}