const importData = await import('./renderEngine/renderEngine.js');
const Module = await importData.default();
const render = Module.cwrap('render', 'number', ['number', 'array', 'array', 'number']);

onmessage = (e) => {
    const { settingsValues, controlValues, imageData, load } = e.data;
    if (!load) {
        const cMemory = new Uint8Array(Module.HEAP8.buffer, 0, imageData.data.length);
        cMemory.set(imageData.data);
        render(0, settingsValues, controlValues, imageData.data.length);
        imageData.data.set(cMemory);
        postMessage(imageData);
    }
}