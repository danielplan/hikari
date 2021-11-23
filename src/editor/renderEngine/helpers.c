#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>

float getHue(uint8_t* a) {
    float fR = a[0];
    float fG = a[1];
    float fB = a[2];
    float fH = 0;
    float fCMax = fmax(fmax(fR, fG), fB);
    float fCMin = fmin(fmin(fR, fG), fB);
    float fDelta = fCMax - fCMin;

    if (fDelta > 0) {
        if (fCMax == fR) {
            fH = 60 * (fmod(((fG - fB) / fDelta), 6));
        } else if (fCMax == fG) {
            fH = 60 * (((fB - fR) / fDelta) + 2);
        } else if (fCMax == fB) {
            fH = 60 * (((fR - fG) / fDelta) + 4);
        }
    } else {
        fH = 0;
    }

    if (fH < 0) {
        fH = 360 + fH;
    }
    return fH;
}

bool isBright(float value) {
    if (value > 125) {
        return true;
    } else {
        return false;
    }
}

double getMean(uint8_t* a) {
    return (a[0] + a[1] + a[2]) / 3.0;
}

bool isBetween(double value, int a, int b) {
    if (value > a && value <= b) {
        return true;
    }
    return false;
}

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

bool isChecked(int checkboxValue) {
    if (checkboxValue == 1) {
        return true;
    }
    return false;
}