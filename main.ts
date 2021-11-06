input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "closed") {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
radio.setGroup(1)
