function createControl(label: string, defaultValue: string, parent: HTMLElement): HTMLInputElement {
    const root = document.createElement('div');
    const labelElement = document.createElement('label');
    labelElement.innerText = label;
    labelElement.htmlFor = label;
    const controlElement = document.createElement('input');
    controlElement.value = defaultValue;
    controlElement.name = label;
    root.appendChild(labelElement);
    root.appendChild(controlElement);
    parent.appendChild(root);
    return controlElement;
}

export function createRangeControl(min: number, max: number, label: string, defaultValue: number, parent: HTMLElement): HTMLInputElement {
    const element = createControl(label, defaultValue.toString(), parent);
    element.type = 'range';
    element.min = min.toString();
    element.max = max.toString();
    return element;
}