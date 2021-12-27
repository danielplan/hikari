
#ifndef EFFECTS_H
#define EFFECTS_H
#include <stdio.h>

void invert(uint8_t* a, int value);
void setBW(uint8_t* a, int value, double mean);
void adjustBrightness(uint8_t* a, double amount);
void adjustLightBrightness(uint8_t* a, double amount, float mean);
void adjustDarkBrightness(uint8_t* a, double amount, float mean);
void adjustSaturation(uint8_t* a, double amount, float mean);
void adjustContrast(uint8_t* a, double amount, double mean);
void adjustColorSaturation(uint8_t* a, double amount, double mean, double hue, char color);
#endif