input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    b = 0
    a = 1
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    a = b + a
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showNumber(b)
})
let a = 0
let b = 0
b = 0
a = 1
basic.showNumber(a)
basic.forever(function () {
	
})
