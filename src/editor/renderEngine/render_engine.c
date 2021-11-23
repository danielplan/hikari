#include "effects.h"
#include "helpers.h"
#include <emscripten/emscripten.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
void render(uint8_t* a, uint8_t* settings_array, int8_t* value_array, int length) {
    int invertion = settings_array[0];
    int bw = settings_array[1];
    int brightness = value_array[0];
    double contrast = value_array[1] / -100.0;
    double saturation = value_array[2] / 100.0;
    double redSaturation = value_array[3] / 100.0;
    double orangeSaturation = value_array[4] / 100.0;
    double yellowSaturation = value_array[5] / 100.0;
    double greenSaturation = value_array[6] / 100.0;
    double tealSaturation = value_array[7] / 100.0;
    double cyanSaturation = value_array[8] / 100.0;
    double blueSaturation = value_array[9] / 100.0;
    double purpleSaturation = value_array[10] / 100.0;
    double magentaSaturation = value_array[11] / 100.0;

    for (int i = 0; i < length; i += 4) {
        invert(&a[i], invertion);
        double mean = getMean(&a[i]);
        setBW(&a[i], bw, mean);
        adjustBrightness(&a[i], brightness);
        mean = getMean(&a[i]);
        adjustContrast(&a[i], contrast, mean);
        mean = getMean(&a[i]);
        adjustSaturation(&a[i], saturation, mean);
        double hue = getHue(&a[i]);
        adjustColorSaturation(&a[i], redSaturation, mean, hue, 'r');
        adjustColorSaturation(&a[i], orangeSaturation, mean, hue, 'o');
        adjustColorSaturation(&a[i], yellowSaturation, mean, hue, 'y');
        adjustColorSaturation(&a[i], greenSaturation, mean, hue, 'g');
        adjustColorSaturation(&a[i], tealSaturation, mean, hue, 't');
        adjustColorSaturation(&a[i], cyanSaturation, mean, hue, 'c');
        adjustColorSaturation(&a[i], blueSaturation, mean, hue, 'b');
        adjustColorSaturation(&a[i], purpleSaturation, mean, hue, 'p');
        adjustColorSaturation(&a[i], magentaSaturation, mean, hue, 'm');
    }
}
