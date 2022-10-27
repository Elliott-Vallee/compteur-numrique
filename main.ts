let Nombre = 0
input.onButtonPressed(Button.A, function () {
    Nombre += 1
    basic.showNumber(Nombre)
})
input.onButtonPressed(Button.AB, function () {
    Nombre = 0
    basic.showNumber(Nombre)
})
input.onButtonPressed(Button.B, function () {
    Nombre += -1
    basic.showNumber(Nombre)
})
basic.forever(function () {
    if (10 == Nombre) {
        basic.showString("MAX")
    }
    if (Nombre >= 0) {
        Nombre = 0
    }
})
