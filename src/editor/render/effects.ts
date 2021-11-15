import { SaturationData } from './index';

export function brighten(data: ImageData, i: number, value: number): void {
    const max = Math.max(data.data[i + 0], data.data[1], data.data[2]);
    const x = max * value / 100;
    data.data[i + 0] += + x;
    data.data[i + 1] += + x;
    data.data[i + 2] += + x;
}

export function darken(data: ImageData, i: number, value: number): void {
    const min = Math.min(data.data[i + 0], data.data[i + 1], data.data[i + 2]);
    const x = (255 - min) * value / 100;
    data.data[i + 0] -= + x;
    data.data[i + 1] -= + x;
    data.data[i + 2] -= + x;
}

export function saturate(data: SaturationData, value: number): void {
    data.imageData.data[data.i + 0] += (data.imageData.data[data.i + 0] - data.mean) * value / 100;
    data.imageData.data[data.i + 1] += (data.imageData.data[data.i + 1] - data.mean) * value / 100;
    data.imageData.data[data.i + 2] += (data.imageData.data[data.i + 2] - data.mean) * value / 100;
}
