#include "mbed.h"

InterruptIn button1 (PA_1);
Ticker ticker;
enum statusTyp {l1, l2, l3, l4, l5, l6, won};
statusTyp status;

DigitalOut led1 (PA_5);
DigitalOut led2 (PA_6);
DigitalOut led3 (PA_7);
DigitalOut led4 (PB_6);

DigitalOut buzzer (PB_3);


void isrTicker(){
    if (status == l1){
        led1 = 0;
        led2 = 1;
        led3 = 1;
        led4 = 1;
        status = l2;
        buzzer = 1;
    } else if (status == l2){
        led1 = 1;
        led2 = 0;
        led3 = 1;
        led4 = 1;
        status = l3;
    } else if (status == l3){
        led1 = 1;
        led2 = 1;
        led3 = 0;
        led4 = 1;
        status = l4;
    } else if (status == l4){
        led1 = 1;
        led2 = 1;
        led3 = 1;
        led4 = 0;
        status = l5;
    } else if (status == l5){
        led1 = 1;
        led2 = 1;
        led3 = 0;
        led4 = 1;
        status = l6;
    } else if (status == l6){
        led1 = 1;
        led2 = 0;
        led3 = 1;
        led4 = 1;
        status = l1;
    } else if (status == won){
        led1 = 0;
        led2 = 0;
        led3 = 0;
        led4 = 0;
        status = l1;
        buzzer = 0;
    }
}


void isrButton1() {
    if (led3 == 0){
        status = won;
    }
}

int main() {
    buzzer = 1;
    status = l1;

    button1.fall( &isrButton1 );
    ticker.attach(&isrTicker, 500ms);

    while (true){}
    
    
}