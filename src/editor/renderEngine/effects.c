#include <emscripten/emscripten.h>
#include "colors.h"
#include "helpers.h"
#include <stdbool.h>
#include <stdio.h>

void invert(uint8_t* a, int value) {
    if (isChecked(value) == true) {
        for (int i = 0; i < 3; i++) {
            a[i] = safeAdd(255, -a[i]);
        }
    }
}

void adjustBrightness(uint8_t* a, double amount) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], amount);
    }
}
void adjustLightBrightness(uint8_t* a, double amount, float mean) {
    if (isBright(mean) == true) {
        for (int i = 0; i < 3; i++) {
            a[i] = safeAdd(a[i], amount * (mean-80)/175);
        }
    }
}
void adjustDarkBrightness(uint8_t* a, double amount, float mean) {
    if (isBright(mean) == false) {
        for (int i = 0; i < 3; i++) {
            a[i] = safeAdd(a[i],  amount * (-mean+80)/80);
        }
    }
}

void adjustSaturation(uint8_t* a, double amount, float mean) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], (a[i] - mean) * amount);
    }
}

void setBW(uint8_t* a, int value, double mean) {
    if (isChecked(value) == true) {
        adjustSaturation(a, -1, mean);
    }
}

void adjustContrast(uint8_t* a, double amount, double mean) {
    double f = (127 - mean) * amount;
    adjustBrightness(a, f);
}

void adjustColorSaturation(uint8_t* a, double amount, double mean, double hue, char color) {
    switch (color) {
        case 'r':
            if (isRed(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'o':
            if (isOrange(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'y':
            if (isYellow(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'g':
            if (isGreen(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 't':
            if (isTeal(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'c':
            if (isCyan(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'b':
            if (isBlue(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'p':
            if (isPurple(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
        case 'm':
            if (isMagenta(hue) == true) {
                adjustSaturation(a, amount, mean);
            }
            break;
    }
}