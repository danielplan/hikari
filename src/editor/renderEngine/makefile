all: 
	emcc -O3 render_engine.c colors.c helpers.c effects.c -o renderEngine.js -s EXTRA_EXPORTED_RUNTIME_METHODS=['ccall','cwrap'] -s EXPORT_ES6=1 -s MODULARIZE=1 -s WASM=1