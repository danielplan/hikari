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

export type renderFunction = (heapStart: number, controlValues: number[], length: number) => number;

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D,
    controls: Controls, render: renderFunction, Module: any) {
    const controlValues = Object.values(controls).map(c => Number.parseInt(c.value));
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);

    const cMemory = new Uint8Array(Module.HEAP8.buffer, 0, imageData.data.length);
    cMemory.set(imageData.data);
    render(0, controlValues, imageData.data.length);
    imageData.data.set(cMemory);

    canvasContext.putImageData(imageData, 0, 0);
}