export function brighten(data: ImageData, i: number, value: number): void {
    const max = Math.max(data.data[i + 0], data.data[1], data.data[2]);
    const x = max * value / 100;
    data.data[i + 0] += + x;
    data.data[i + 1] += + x;
    data.data[i + 2] += + x;
}

export function darken(data: ImageData, i: number, value: number): void {
    const min = Math.max(data.data[i + 0], data.data[i + 1], data.data[i + 2]);
    const x = (255 - min) * (value * -1) / 100;
    data.data[i + 0] += + x;
    data.data[i + 1] += + x;
    data.data[i + 2] += + x;
}

export function saturate(data: ImageData, i: number, mean: number, value: number): void {
    data.data[i + 0] += (data.data[i + 0] - mean) * value / 100;
    data.data[i + 1] += (data.data[i + 1] - mean) * value / 100;
    data.data[i + 2] += (data.data[i + 2] - mean) * value / 100;
}

export function deSaturate(data: ImageData, i: number, mean: number, value: number): void {
    data.data[i + 0] += (mean - data.data[i + 0]) * value / 100;
    data.data[i + 1] += (mean - data.data[i + 1]) * value / 100;
    data.data[i + 2] += (mean - data.data[i + 2]) * value / 100;
}
