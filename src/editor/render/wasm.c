#include <stdio.h>
#include <cmath>
#include <emscripten/emscripten.h>

void getHue(float fR, float fG, float fB)
{
    float fCMax = max(max(fR, fG), fB);
    float fCMin = min(min(fR, fG), fB);
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

void adjustContrast(int16_t *a, int amount, double mean)
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

void adjustSaturation(int16_t *a, double amount, float mean)
{
    a[0] += (a[0] - mean) * amount;
    a[1] += (a[1] - mean) * amount;
    a[2] += (a[2] - mean) * amount;
}

double getMean(int16_t *a)
{
    return (a[0] + a[1] + a[2]) / 3.0;
}

EMSCRIPTEN_KEEPALIVE
double render(int16_t *a, int8_t *value_array, int length)
{
    int brightness = value_array[0];
    int contrast = value_array[1];
    double saturation = value_array[2] / 100.0;

    for (int i = 0; i < length; i += 4)
    {
        double mean = getMean(&a[i]);
        adjustBrightness(&a[i], brightness);
        adjustContrast(&a[i], contrast, mean);
        adjustSaturation(&a[i], saturation, mean);
    }
    return 0;
}
