import { isBetween } from './helpers';
import { ColorSaturationData } from './index';

export function isRed(data: ColorSaturationData): boolean {
    return data.hue > 340 || data.hue <= 10;
}

export function isOrange(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 10, 40);
}

export function isYellow(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 40, 60);
}

export function isGreen(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 60, 130);
}
export function isTeal(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 130, 160);
}

export function isCyan(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 160, 220);
}

export function isBlue(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 220, 260);
}

export function isPurple(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 260, 300);
}

export function isMagenta(data: ColorSaturationData): boolean {
    return isBetween(data.hue, 300, 340);
}
