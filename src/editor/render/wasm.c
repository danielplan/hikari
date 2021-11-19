#include <stdio.h>
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE
void render(int16_t *a, int length)
{
    for (int i = 0; i < length; i += 4)
    {
        float mean = (a[i] + a[i + 1] + a[i + 2]) / 3.0;
        a[i + 0] += (a[i + 0] - mean) * -100 / 100;
        a[i + 1] += (a[i + 1] - mean) * -100 / 100;
        a[i + 2] += (a[i + 2] - mean) * -100 / 100;
    }
}
