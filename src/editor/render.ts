interface Controls {
    brightness: HTMLInputElement,
    contrast: HTMLInputElement
}

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D, controls: Controls) {
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        adjustBrightness(imageData, i, controls.brightness.value);
        adjustContrast(imageData, i, controls.contrast.value);
    }

    canvasContext.putImageData(imageData, 0, 0);

}

function adjustBrightness(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value) * 0.5;
    if (value > 0) {
        brighten(data, i, value);
    } else {
        darken(data, i, value * -1);
    }
}

function adjustContrast(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value) * 0.25;
    const mean = (data.data[i + 0] + data.data[i + 1] + data.data[i + 2]) / 3;
    if (value > 0) {
        if (mean > 200) {
            brighten(data, i, value);
        } else {
            darken(data, i, value);
        }
    } else {
        if (mean > 200) {
            darken(data, i, value * -1);
        } else {
            brighten(data, i, value * -1);
        }
    }
}

function brighten(data: ImageData, i: number, value: number): void {
    const max = Math.max(data.data[i + 0], data.data[1], data.data[2]);
    const x = max * value / 100;
    data.data[i + 0] = data.data[i + 0] + x;
    data.data[i + 1] = data.data[i + 1] + x;
    data.data[i + 2] = data.data[i + 2] + x;
}

function darken(data: ImageData, i: number, value: number): void {
    const min = Math.max(data.data[i + 0], data.data[i + 1], data.data[i + 2]);
    const x = (255 - min) * (value * -1) / 100;
    data.data[i + 0] = data.data[i + 0] + x;
    data.data[i + 1] = data.data[i + 1] + x;
    data.data[i + 2] = data.data[i + 2] + x;
}