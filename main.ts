Microbit.init()
let count = 0
Microbit.showNumber(Oled.oled1, count)
basic.forever(function () {
    if (Microbit.ping(Ultrasonic_pin.u3, PingUnit.Centimeters) < 2) {
        count += 1
        Microbit.showNumber(Oled.oled1, count)
        basic.pause(2000)
    }
})
