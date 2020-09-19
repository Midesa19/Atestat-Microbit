input.onButtonPressed(Button.A, function () {
    if (index == 0) {
        index = 4
    } else {
        index = index - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (index == 4) {
        index = 0
        isIn = false
    } else {
        index = index + 1
        isIn = false
    }
})
radio.setGroup(20)
let list = [1, 2, 3, 4, 5]
let index: number;
index = 0
let isIn: boolean;
isIn = false
basic.forever(function () {
    while (index == 0) {
        if (input.buttonIsPressed(Button.AB) && !(isIn)) {
            isIn = true
            basic.pause(500)
        } else {
            if (input.buttonIsPressed(Button.AB) && isIn) {
                isIn = false
                basic.pause(500)
            }
        }
        if (isIn) {
            basic.showNumber(input.temperature())
            basic.pause(500)
        } else {
            basic.showNumber(1)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
    }
    while (index == 1) {
        if (input.buttonIsPressed(Button.AB) && !(isIn)) {
            isIn = true
            basic.pause(500)
        } else {
            if (input.buttonIsPressed(Button.AB) && isIn) {
                isIn = false
                basic.pause(500)
            }
        }
        if (isIn) {
            basic.showNumber(input.compassHeading())
            basic.pause(500)
        } else {
            basic.showNumber(2)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
    }
    while (index == 2) {
        if (input.buttonIsPressed(Button.AB) && !(isIn)) {
            isIn = true
            basic.pause(500)
        } else {
            if (input.buttonIsPressed(Button.AB) && isIn) {
                isIn = false
                basic.pause(500)
            }
        }
        if (isIn) {
            let a: number;
            input.onGesture(Gesture.Shake, function () {
                a=randint(0, 2)
            })
            basic.pause(500)
            if (a == 0) {
                basic.showIcon(IconNames.Scissors)
            } else {
                if (a == 1) {
                    basic.showIcon(IconNames.SmallSquare)
                } else {
                    if (a == 2) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
            }
        } else {
            basic.showNumber(3)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
    }
    while (index == 3) {
        if (input.buttonIsPressed(Button.AB) && !(isIn)) {
            isIn = true
            basic.pause(500)
        } else {
            if (input.buttonIsPressed(Button.AB) && isIn) {
                isIn = false
                basic.pause(500)
            }
        }
        if (!isIn) {
            basic.showNumber(4)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
        else{
            if(input.isGesture(Gesture.Shake)){
                basic.clearScreen()
                radio.sendString("DUCK")
            }
            else{
                radio.onReceivedStringDeprecated(function (receivedString) {
                    basic.showIcon(IconNames.Duck)            
                })
            }
        }
    }
    while (index == 4) {
        basic.showNumber(5)
        basic.pause(250)
        basic.clearScreen()
        basic.pause(250)
    }
})

