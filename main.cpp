#include "mbed.h"

InterruptIn button1 (PA_1);
Ticker ticker;

unsigned int leds;
int won;
bool richtung;
BusOut ledsPort ( PA_5, PA_6, PA_7, PB_6 );

void isrTicker(){


    ledsPort = 0b0101;



}


void isrButton1() {
}

int main() {


    //button1.fall( &isrButton1 );
    ticker.attach(&isrTicker, 500ms);

    while (true){}
    
    
}
