import { brighten, darken, saturate } from './effects';
import { isBright, getMean, getHue } from './helpers';
import { isRed, isBlue, isGreen, isOrange, isYellow, isTeal, isCyan, isMagenta, isPurple } from './colors';

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

export interface BasicData {
    imageData: ImageData;
    i: number;
}

export interface SaturationData extends BasicData {
    mean: number;
}

export interface ColorSaturationData extends SaturationData {
    hue: number;
}

export function renderImage(img: HTMLImageElement, imageCanvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D, controls: Controls) {
    canvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    const imageData = canvasContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const basicData = {
            imageData,
            i
        }
        const mean = getMean(imageData, i);
        //way faster runtime when not extending basicData
        const saturationData = {
            imageData,
            i,
            mean
        }
        const hue = getHue(imageData, i);
        const colorSaturationData = {
            imageData,
            i,
            mean,
            hue
        }
        adjustBrightness(basicData, controls.brightness.value);
        adjustContrast(basicData, controls.contrast.value);
        adjustSaturation(saturationData, controls.saturation.value);
        adjustColorSaturation(colorSaturationData, controls.redSaturation.value, isRed);
        adjustColorSaturation(colorSaturationData, controls.orangeSaturation.value, isOrange);
        adjustColorSaturation(colorSaturationData, controls.yellowSaturation.value, isYellow);
        adjustColorSaturation(colorSaturationData, controls.greenSaturation.value, isGreen);
        adjustColorSaturation(colorSaturationData, controls.tealSaturation.value, isTeal);
        adjustColorSaturation(colorSaturationData, controls.cyanSaturation.value, isCyan);
        adjustColorSaturation(colorSaturationData, controls.blueSaturation.value, isBlue);
        adjustColorSaturation(colorSaturationData, controls.magentaSaturation.value, isMagenta);
        adjustColorSaturation(colorSaturationData, controls.purpleSaturation.value, isPurple);
    }

    canvasContext.putImageData(imageData, 0, 0);
}

function adjustBrightness(data: BasicData, value: any): void {
    value = Number.parseInt(value) * 0.5;
    if (value > 0) {
        brighten(data.imageData, data.i, value);
    } else {
        darken(data.imageData, data.i, value * -1);
    }
}

function adjustContrast(data: BasicData, value: any): void {
    value = Number.parseInt(value) * 0.5;
    const mean = getMean(data.imageData, data.i);
    if (isBright(mean)) {
        if (value > 0) {
            brighten(data.imageData, data.i, value);
        } else {
            darken(data.imageData, data.i, value);
        }
    } else {
        if (value > 0) {
            darken(data.imageData, data.i, value);
        } else {
            brighten(data.imageData, data.i, value * -1);
        }

    }
}

function adjustSaturation(data: SaturationData, value: any): void {
    value = Number.parseInt(value);
    saturate(data, value);
}

function adjustColorSaturation(data: ColorSaturationData, value: any, isColor: (data: ColorSaturationData) => boolean) {
    value = Number.parseInt(value);
    if (isColor(data)) {
        saturate(data, value);
    }
}
