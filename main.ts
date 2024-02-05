input.onGesture(Gesture.Shake, function () {
    if (pop > 50) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else {
        pop += randint(0, 4)
        basic.showLeds(`
            . . . # .
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            `)
        basic.showLeds(`
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            . . . . .
            `)
    }
})
let pop = 0
pop = 0
