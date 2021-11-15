export function getMean(data: ImageData, i: number): number {
    return (data.data[i + 0] + data.data[i + 1] + data.data[i + 2]) / 3;
}

export function isBright(mean: number): boolean {
    return mean > 125;
}

export function isBetween(value: number, a: number, b: number): boolean {
    return value > a && value <= b;
}

export function getHue(data: ImageData, i: number) {
    let r = data.data[i + 0], g = data.data[i + 1], b = data.data[i + 2];
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = (max + min) / 2;

    if (max == min) {
        h = 0; // achromatic
    } else {
        var d = max - min;
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return h * 360;
}