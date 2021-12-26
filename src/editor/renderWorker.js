import importData from './renderEngine.wasm';
importData({ imports: {} }).then((Module) => {
    const render = Module.render;
    onmessage = (e) => {
        const { imageData, settingsValues, controlValues } = e.data;
        const imageDataLength = imageData.data.length;
        const imageDataOffset = 0;
        const settingsOffset = imageDataLength;
        const controlValuesOffset = settingsOffset + settingsValues.length;

        const cMemory = new Uint8Array(Module.memory.buffer);

        cMemory.set(imageData.data, imageDataOffset);
        cMemory.set(settingsValues, settingsOffset);
        cMemory.set(controlValues, controlValuesOffset);

        render(imageDataOffset, settingsOffset, controlValuesOffset, imageDataLength)
        imageData.data.set(cMemory.slice(0, imageDataLength));
        postMessage(imageData);
    }
});