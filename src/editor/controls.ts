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
    const number = document.createElement('input');
    number.type = 'number';
    number.min = min.toString();
    number.max = max.toString();
    number.type = 'number';
    number.value = element.value;
    element.addEventListener('change', () => {
        number.value = element.value;
    });
    number.addEventListener('change', () => {
        element.value = number.value;
        element.dispatchEvent(new InputEvent('change'))
    });
    element.type = 'range';
    element.min = min.toString();
    element.max = max.toString();
    parent.appendChild(number);
    return element;
}