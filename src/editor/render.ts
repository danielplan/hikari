interface Controls {
    brightness: HTMLInputElement;
    contrast: HTMLInputElement;
    saturation: HTMLInputElement;
    greenSaturation: HTMLInputElement;
}

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D, controls: Controls) {
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        adjustBrightness(imageData, i, controls.brightness.value);
        adjustContrast(imageData, i, controls.contrast.value);
        adjustSaturation(imageData, i, controls.saturation.value);
        adjustSaturationByColor(imageData, i, 1, controls.greenSaturation.value);
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
    const mean = getMean(data, i);
    if (value > 0) {
        if (isLight(mean)) {
            brighten(data, i, value);
        } else {
            darken(data, i, value);
        }
    } else {
        value *= -1;
        if (isLight(mean)) {
            darken(data, i, value);
        } else {
            brighten(data, i, value);
        }
    }
}

function adjustSaturationByColor(data: ImageData, i: number, colorIndex: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (data.data[i + colorIndex] >= data.data[i + 0] &&
        data.data[i + colorIndex] >= data.data[i + 1] &&
        data.data[i + colorIndex] >= data.data[i + 2]) {
        if (value > 0) {
            saturate(data, i, mean, value);
        } else {
            value *= -1;
            deSaturate(data, i, mean, value);
        }
    }
}

function adjustSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (value > 0) {
        saturate(data, i, mean, value);
    } else {
        value *= -1;
        deSaturate(data, i, mean, value);
    }
}

function brighten(data: ImageData, i: number, value: number): void {
    const max = Math.max(data.data[i + 0], data.data[1], data.data[2]);
    const x = max * value / 100;
    data.data[i + 0] += + x;
    data.data[i + 1] += + x;
    data.data[i + 2] += + x;
}

function darken(data: ImageData, i: number, value: number): void {
    const min = Math.max(data.data[i + 0], data.data[i + 1], data.data[i + 2]);
    const x = (255 - min) * (value * -1) / 100;
    data.data[i + 0] += + x;
    data.data[i + 1] += + x;
    data.data[i + 2] += + x;
}

function saturate(data: ImageData, i: number, mean: number, value: number) {
    data.data[i + 0] += (data.data[i + 0] - mean) * value / 100;
    data.data[i + 1] += (data.data[i + 1] - mean) * value / 100;
    data.data[i + 2] += (data.data[i + 2] - mean) * value / 100;
}

function deSaturate(data: ImageData, i: number, mean: number, value: number) {
    data.data[i + 0] += (mean - data.data[i + 0]) * value / 100;
    data.data[i + 1] += (mean - data.data[i + 1]) * value / 100;
    data.data[i + 2] += (mean - data.data[i + 2]) * value / 100;
}

function getMean(data: ImageData, i: number): number {
    return (data.data[i + 0] + data.data[i + 1] + data.data[i + 2]) / 3;
}

function isLight(mean: number): boolean {
    return mean > 125;
}