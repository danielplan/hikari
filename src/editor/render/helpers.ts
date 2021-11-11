export function getMean(data: ImageData, i: number): number {
    return (data.data[i + 0] + data.data[i + 1] + data.data[i + 2]) / 3;
}

export function isBright(mean: number): boolean {
    return mean > 125;
}

const cTh = 50;
export function isRed(data: ImageData, i: number): boolean {
    return data.data[i + 0] > data.data[i + 1] &&
        data.data[i + 0] - data.data[i + 1] > cTh &&
        data.data[i + 0] > data.data[i + 2] &&
        data.data[i + 0] - data.data[i + 2] > cTh;
}

export function isYellow(data: ImageData, i: number): boolean {
    return Math.abs(data.data[i + 0] - data.data[i + 1]) < cTh &&
        data.data[i + 1] > data.data[i + 2] &&
        data.data[i + 1] - data.data[i + 2] > cTh;
}

export function isGreen(data: ImageData, i: number): boolean {
    return data.data[i + 1] > data.data[i + 0] &&
        data.data[i + 1] - data.data[i + 0] > cTh &&
        data.data[i + 1] > data.data[i + 2] &&
        data.data[i + 1] - data.data[i + 2] > cTh;
}

export function isTeal(data: ImageData, i: number): boolean {
    return Math.abs(data.data[i + 1] - data.data[i + 2]) < cTh &&
        data.data[i + 1] > data.data[i + 0] &&
        data.data[i + 1] - data.data[i + 0] > cTh;
}

export function isBlue(data: ImageData, i: number): boolean {
    return data.data[i + 2] > data.data[i + 0] &&
        data.data[i + 2] - data.data[i + 0] > cTh &&
        data.data[i + 2] > data.data[i + 1] &&
        data.data[i + 2] - data.data[i + 1] > cTh;
}

export function isPurple(data: ImageData, i: number): boolean {
    return Math.abs(data.data[i + 0] - data.data[i + 2]) < cTh &&
        data.data[i + 2] > data.data[i + 1] &&
        data.data[i + 2] - data.data[i + 1] > cTh;
}