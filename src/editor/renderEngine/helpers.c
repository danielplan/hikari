#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <emscripten/emscripten.h>

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