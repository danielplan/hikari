#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>

float getHue(int16_t *a)
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

void adjustBrightness(int16_t *a, int amount)
{
    a[0] += amount;
    a[1] += amount;
    a[2] += amount;
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

void adjustSaturation(int16_t *a, double amount, float mean)
{
    a[0] += (a[0] - mean) * amount;
    a[1] += (a[1] - mean) * amount;
    a[2] += (a[2] - mean) * amount;
}

void adjustContrast(int16_t *a, int amount, double mean)
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

double getMean(int16_t *a)
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

void adjustRedSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isRed(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustOrangeSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isOrange(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustYellowSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isYellow(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustGreenSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isGreen(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustTealSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isTeal(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustCyanSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isCyan(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustBlueSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isBlue(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustPurpleSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isPurple(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}
void adjustMagentaSaturation(int16_t *a, double amount, double mean, double hue)
{
    if (isMagenta(hue) == 1)
    {
        adjustSaturation(a, amount, mean);
    }
}

EMSCRIPTEN_KEEPALIVE
void render(int16_t *a, int8_t *value_array, int length)
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
