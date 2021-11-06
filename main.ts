input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "closed") {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
