#include <emscripten/emscripten.h>
#include <string.h>

#define DEBUG(msg) JS_PRINT(msg, sizeof(msg))

EM_JS(void, JS_PRINT, (char* msg, int length), {
    console.log(UTF8ToString(msg, length));
});

void main() {

    // call_alert();

    DEBUG("test");

    EM_ASM({
        document.alarm("test");
        document.render("<span>something awsome</span>")
    });
}