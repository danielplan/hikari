interface Settings {
    invert: HTMLInputElement,
    bw: HTMLInputElement
}

interface Controls {
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
    console.log(render(0, settingsValues, controlValues, imageData.data.length));
    imageData.data.set(cMemory);

    canvasContext.putImageData(imageData, 0, 0);
}