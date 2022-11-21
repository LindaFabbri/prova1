input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    numero = randint(1, 6)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(numero)
})
let numero = 0
numero = 0
