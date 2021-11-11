import { brighten, darken, saturate, deSaturate } from './effects';
import { isBright, getMean, isGreen, isRed, isBlue, isPurple, isTeal, isYellow } from './helpers';

interface Controls {
    brightness: HTMLInputElement;
    contrast: HTMLInputElement;
    saturation: HTMLInputElement;
    greenSaturation: HTMLInputElement;
    redSaturation: HTMLInputElement;
    blueSaturation: HTMLInputElement;
    purpleSaturation: HTMLInputElement;
    tealSaturation: HTMLInputElement;
    yellowSaturation: HTMLInputElement;
}

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D, controls: Controls) {
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        adjustBrightness(imageData, i, controls.brightness.value);
        adjustContrast(imageData, i, controls.contrast.value);
        adjustSaturation(imageData, i, controls.saturation.value);
        adjustGreenSaturation(imageData, i, controls.greenSaturation.value);
        adjustRedSaturation(imageData, i, controls.redSaturation.value);
        adjustBlueSaturation(imageData, i, controls.blueSaturation.value);
        adjustPurpleSaturation(imageData, i, controls.purpleSaturation.value);
        adjustTealSaturation(imageData, i, controls.tealSaturation.value);
        adjustYellowSaturation(imageData, i, controls.yellowSaturation.value);
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
        if (isBright(mean)) {
            brighten(data, i, value);
        } else {
            darken(data, i, value);
        }
    } else {
        value *= -1;
        if (isBright(mean)) {
            darken(data, i, value);
        } else {
            brighten(data, i, value);
        }
    }
}

function adjustGreenSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isGreen(data, i)) {
        saturate(data, i, mean, value);
    }
}

function adjustRedSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isRed(data, i)) {
        saturate(data, i, mean, value);
    }
}

function adjustBlueSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isBlue(data, i)) {
        saturate(data, i, mean, value);
    }
}

function adjustPurpleSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isPurple(data, i)) {
        saturate(data, i, mean, value);
    }
}

function adjustTealSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isTeal(data, i)) {
        saturate(data, i, mean, value);
    }
}

function adjustYellowSaturation(data: ImageData, i: number, value: any): void {
    value = Number.parseInt(value);
    const mean = getMean(data, i);
    if (isYellow(data, i)) {
        saturate(data, i, mean, value);
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
