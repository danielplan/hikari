function createControl(label: string, defaultValue: string, parent: HTMLElement): {
    controlParent: HTMLElement,
    controlElement: HTMLInputElement
} {
    const labelElement = document.createElement('label');
    labelElement.innerText = label;
    labelElement.htmlFor = label;

    const controlElement = document.createElement('input');
    controlElement.value = defaultValue;
    controlElement.name = label;

    const root = document.createElement('div');
    root.classList.add('control-item');
    root.appendChild(labelElement);
    root.appendChild(controlElement);
    parent.appendChild(root);
    return {
        controlParent: root,
        controlElement
    };
}

export function createRangeControl(min: number, max: number, label: string, defaultValue: number, parent: HTMLElement): HTMLInputElement {
    const { controlElement, controlParent } = createControl(label, defaultValue.toString(), parent);
    controlElement.type = 'range';
    controlElement.min = min.toString();
    controlElement.max = max.toString();
    controlElement.classList.add('range-element')
    controlParent.appendChild(createRangeNumberControl(controlElement));
    return controlElement;
}

function createRangeNumberControl(rangeElement: HTMLInputElement) {
    const numberElement = document.createElement('input');
    numberElement.classList.add('number-element')
    numberElement.min = rangeElement.min;
    numberElement.max = rangeElement.max;
    numberElement.type = 'number';
    numberElement.value = rangeElement.value;
    rangeElement.addEventListener('input', () => {
        numberElement.value = rangeElement.value;
    });
    numberElement.addEventListener('change', () => {
        rangeElement.value = numberElement.value;
        rangeElement.dispatchEvent(new InputEvent('change'));
    });
    return numberElement;

}