#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>
#include "helpers.c"
#include "colors.c"
#include "effects.c"

EMSCRIPTEN_KEEPALIVE
void render(uint8_t *a, int8_t *value_array, int length)
{
    int brightness = value_array[0];
    int contrast = value_array[1];
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

    for (int i = 0; i < length; i += 4)
    {
        adjustBrightness(&a[i], brightness);
        double mean = getMean(&a[i]);
        adjustContrast(&a[i], contrast, mean);
        mean = getMean(&a[i]);
        adjustSaturation(&a[i], saturation, mean);
        double hue = getHue(&a[i]);
        adjustRedSaturation(&a[i], redSaturation, mean, hue);
        adjustOrangeSaturation(&a[i], orangeSaturation, mean, hue);
        adjustYellowSaturation(&a[i], yellowSaturation, mean, hue);
        adjustGreenSaturation(&a[i], greenSaturation, mean, hue);
        adjustTealSaturation(&a[i], tealSaturation, mean, hue);
        adjustCyanSaturation(&a[i], cyanSaturation, mean, hue);
        adjustBlueSaturation(&a[i], blueSaturation, mean, hue);
        adjustPurpleSaturation(&a[i], purpleSaturation, mean, hue);
        adjustMagentaSaturation(&a[i], magentaSaturation, mean, hue);
    }
}
