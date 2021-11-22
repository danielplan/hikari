#include <stdbool.h>
#include "helpers.h"
#include <emscripten/emscripten.h>

bool isRed(double hue) {
    if (hue > 340 || hue <= 10) {
        return 1;
    }
    return 0;
}

bool isOrange(double hue) {
    return isBetween(hue, 10, 40);
}
bool isYellow(double hue) {
    return isBetween(hue, 40, 60);
}
bool isGreen(double hue) {
    return isBetween(hue, 60, 130);
}
bool isTeal(double hue) {
    return isBetween(hue, 130, 160);
}
bool isCyan(double hue) {
    return isBetween(hue, 160, 220);
}
bool isBlue(double hue) {
    return isBetween(hue, 220, 260);
}
bool isPurple(double hue) {
    return isBetween(hue, 260, 300);
}
bool isMagenta(double hue) {
    return isBetween(hue, 300, 340);
}