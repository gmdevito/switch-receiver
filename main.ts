radio.onReceivedString(function (receivedString) {
    music.stopAllSounds()
    if (receivedString == "closed") {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Asleep)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
