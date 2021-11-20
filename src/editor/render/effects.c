
#include <emscripten/emscripten.h>
#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

uint8_t safeAdd(int x, int y) {
    int sum = x + y;
    if (sum < 0) {
        return 0;
    } else if (sum > 255) {
        return 255;
    } else {
        return sum;
    }
}
void adjustBrightness(uint8_t* a, int amount) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], amount);
    }
}

void adjustSaturation(uint8_t* a, double amount, float mean) {
    for (int i = 0; i < 3; i++) {
        a[i] = safeAdd(a[i], (a[i] - mean) * amount);
    }
}

void adjustContrast(uint8_t* a, int amount, double mean) {
    amount = amount * 0.5;
    if (amount > 0) {
        adjustBrightness(a, (mean - 127) * amount);
        if (isBright(mean) == 1) {
            adjustBrightness(a, amount);
        } else {
            adjustBrightness(a, -amount);
        }
    } else {
        adjustSaturation(a, amount * 1.5 / 100, 125 + (mean - 125.0) * 0.5);
    }
}

void adjustRedSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isRed(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustOrangeSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isOrange(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustYellowSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isYellow(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustGreenSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isGreen(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustTealSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isTeal(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustCyanSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isCyan(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustBlueSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isBlue(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustPurpleSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isPurple(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}
void adjustMagentaSaturation(uint8_t* a, double amount, double mean, double hue) {
    if (isMagenta(hue) == 1) {
        adjustSaturation(a, amount, mean);
    }
}