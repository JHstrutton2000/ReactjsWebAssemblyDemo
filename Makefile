public/main.wasm: src/main.mjs
src/main.mjs: src/main.c
	emcc --no-entry src/main.c -o src/main.mjs  \
	  --pre-js src/locateFile.js  \
	  -s ENVIRONMENT='web'  \
	  -s EXPORT_NAME='createModule'  \
	  -s USE_ES6_IMPORT_META=0  \
	  -s EXPORTED_FUNCTIONS='["_main", "_malloc", "_free"]'  \
	  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  \
	  -O3
	mv src/main.wasm public/main.wasm
.PHONY: clean
clean:
	rm public/main.wasm src/main.mjs