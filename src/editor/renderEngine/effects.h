
#ifndef EFFECTS_H
#define EFFECTS_H
#include <stdio.h>

void adjustBrightness(uint8_t* a, double amount);
void adjustSaturation(uint8_t* a, double amount, float mean);
void adjustContrast(uint8_t* a, double amount, double mean);
void adjustRedSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustOrangeSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustYellowSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustGreenSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustTealSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustCyanSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustBlueSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustPurpleSaturation(uint8_t* a, double amount, double mean, double hue);
void adjustMagentaSaturation(uint8_t* a, double amount, double mean, double hue);
#endif