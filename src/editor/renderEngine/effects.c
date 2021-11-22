#include <emscripten/emscripten.h>
#include "colors.h"
#include "helpers.h"
#include <stdbool.h>
#include <stdio.h>

void adjustBrightness(uint8_t* a, double amount) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], amount);
    }
}

void adjustSaturation(uint8_t* a, double amount, float mean) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], (a[i] - mean) * amount);
    }
}

void adjustContrast(uint8_t* a, double amount, double mean) {
    double f = (127 - mean) * amount;
    adjustBrightness(a, f);
}

void adjustRedSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isRed(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustOrangeSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isOrange(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustYellowSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isYellow(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustGreenSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isGreen(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustTealSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isTeal(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustCyanSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isCyan(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustBlueSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isBlue(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustPurpleSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isPurple(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustMagentaSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isMagenta(hue) == true) {
        adjustSaturation(a, amount, mean);
    }
}