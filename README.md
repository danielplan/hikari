# Hikari 光

A simple web-based color-grading tool for pixel images.

## Technology choices

Images are displayed using a HTML5 canvas element and manipulated within a webworker that runs the effects using WebAssembly, with code
written in C.
