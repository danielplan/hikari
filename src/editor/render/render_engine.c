#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>

uint8_t secureAdd(int x, int y)
{
    int sum = x + y;
    if (sum < 0)
    {
        return 0;
    }
    else if (sum > 255)
    {
        return 255;
    }
    else
    {
        return sum;
    }
}

float getHue(uint8_t *a)
{
    float fR = a[0];
    float fG = a[1];
    float fB = a[2];
    float fH = 0;
    float fCMax = fmax(fmax(fR, fG), fB);
    float fCMin = fmin(fmin(fR, fG), fB);
    float fDelta = fCMax - fCMin;

    if (fDelta > 0)
    {
        if (fCMax == fR)
        {
            fH = 60 * (fmod(((fG - fB) / fDelta), 6));
        }
        else if (fCMax == fG)
        {
            fH = 60 * (((fB - fR) / fDelta) + 2);
        }
        else if (fCMax == fB)
        {
            fH = 60 * (((fR - fG) / fDelta) + 4);
        }
    }
    else
    {
        fH = 0;
    }

    if (fH < 0)
    {
        fH = 360 + fH;
    }
    return fH;
}

void adjustBrightness(uint8_t *a, int amount)
{
    for (int i = 0; i < 3; i++)
    {
        a[i] = secureAdd(a[i], amount);
    }
}

int isBright(float value)
{
    if (value > 125)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void adjustSaturation(uint8_t *a, double amount, float mean)
{
    for (int i = 0; i < 3; i++)
    {
        a[i] += (a[i] - mean) * amount;
    }
}

void adjustContrast(uint8_t *a, int amount, double mean)
{
    amount = amount * 0.5;
    if (amount > 0)
    {
        if (isBright(mean) == 1)
        {
            adjustBrightness(a, amount);
        }
        else
        {
            adjustBrightness(a, -amount);
        }
    }
    else
    {
        adjustSaturation(a, amount * 1.5 / 100, 125 + (mean - 125.0) * 0.5);
    }
}

double getMean(uint8_t *a)
{
    return (a[0] + a[1] + a[2]) / 3.0;
}

int isBetween(double value, int a, int b)
{
    if (value > a && value <= b)
    {
        return 1;
    }
    return 0;
}

int isRed(double hue)
{
    if (hue > 340 || hue <= 10)
    {
        return 1;
    }
    return 0;
}

int isOrange(double hue)
{
    return isBetween(hue, 10, 40);
}
int isYellow(double hue)
{
    return isBetween(hue, 40, 60);
}
int isGreen(double hue)
{
    return isBetween(hue, 60, 130);
}
int isTeal(double hue)
{
    return isBetween(hue, 130, 160);
}
int isCyan(double hue)
{
    return isBetween(hue, 160, 220);
}
int isBlue(double hue)
{
    return isBetween(hue, 220, 260);
}
int isPurple(double hue)
{
    return isBetween(hue, 260, 300);
}
int isMagenta(double hue)
{
    return isBetween(hue, 300, 340);
}

void adjustRedSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isRed(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustOrangeSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isOrange(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustYellowSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isYellow(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustGreenSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isGreen(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustTealSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isTeal(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustCyanSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isCyan(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustBlueSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isBlue(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustPurpleSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isPurple(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustMagentaSaturation(uint8_t *a, double amount, double mean, double hue)
{
    if (isMagenta(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}

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
