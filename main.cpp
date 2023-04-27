#include "mbed.h"

InterruptIn button1 (PA_1);
Ticker ticker;

unsigned int leds;
int won;
bool richtung;
BusOut ledsPort ( PA_5, PA_6, PA_7, PB_6 );

void isrTicker(){
    richtung = true;

    ledsPort = ~leds;

        if (leds == 0b1000){
            richtung = false;
        } else if (leds == 0b0001){
            richtung = true;
        }

        if (richtung == true){
            leds = leds << 1;
        } else {
            leds = leds >> 1;
        }
    ledsPort = ~leds;
}


void isrButton1() {
}

int main() {
    leds = 1;

    //button1.fall( &isrButton1 );
    ticker.attach(&isrTicker, 500ms);

    while (true){}
    
    
}
