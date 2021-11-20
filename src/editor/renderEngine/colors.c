#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>

int isRed(double hue) {
    if (hue > 340 || hue <= 10) {
        return 1;
    }
    return 0;
}

int isOrange(double hue) {
    return isBetween(hue, 10, 40);
}
int isYellow(double hue) {
    return isBetween(hue, 40, 60);
}
int isGreen(double hue) {
    return isBetween(hue, 60, 130);
}
int isTeal(double hue) {
    return isBetween(hue, 130, 160);
}
int isCyan(double hue) {
    return isBetween(hue, 160, 220);
}
int isBlue(double hue) {
    return isBetween(hue, 220, 260);
}
int isPurple(double hue) {
    return isBetween(hue, 260, 300);
}
int isMagenta(double hue) {
    return isBetween(hue, 300, 340);
}