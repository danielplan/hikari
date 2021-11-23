#ifndef HELPERS_H
#define HELPERS_H
#include <stdbool.h>
#include <stdio.h>

float getHue(uint8_t* a);
bool isBright(float value);
double getMean(uint8_t* a);
uint8_t safeAdd(int x, int y);
bool isBetween(double value, int a, int b);
bool isChecked(int checkboxValue);
#endif