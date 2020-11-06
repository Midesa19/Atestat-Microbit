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
let duckie: boolean;
duckie = false
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
        if (isIn) {
            let miner=game.createSprite(2, 2)
            let gold=game.createSprite(randint(0, 4), randint(0, 4))
            let score=0;
            while(score<10){
                if(miner.x()==gold.x() && miner.y()==gold.y()){
                    score=score+1
                    gold.set(LedSpriteProperty.X, randint(0,4))
                    gold.set(LedSpriteProperty.Y, randint(0,4))
                }
                if(input.acceleration(Dimension.X)>200){
                    miner.changeXBy(1)
                    basic.pause(100)
                }
                if(input.acceleration(Dimension.X)<200){
                    miner.changeXBy(-1)
                    basic.pause(100)
                }
                if(input.acceleration(Dimension.Y)>200){
                    miner.changeYBy(1)
                    basic.pause(100)
                }
                if(input.acceleration(Dimension.Y)<200){
                    miner.changeYBy(-1)
                    basic.pause(100)
                }
            }
        
            gold.delete()
            miner.delete()
            basic.showIcon(IconNames.Happy)
            basic.pause(1000)
        } 
        else {
            basic.showNumber(4)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
    }
    while (index == 4) {
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
        	basic.showString("3-2-1-START")
            let cupcake=game.createSprite(2, 2)
            let cupcakeOnPlate=true;
            let tolerance=200
            while(cupcakeOnPlate){
                if(input.acceleration(Dimension.X)>tolerance){
                    if(cupcake.x()==4)
                        cupcakeOnPlate=false
                    else{
                        cupcake.changeXBy(1)
                        basic.pause(200)
                    }
                }
                if(input.acceleration(Dimension.X)<(-1)*tolerance){
                    if(cupcake.x()==0)
                        cupcakeOnPlate=false
                    else{
                        cupcake.changeXBy(-1)
                        basic.pause(200)
                    }
                }
                if(input.acceleration(Dimension.Y)>tolerance){
                    if(cupcake.y()==4)
                        cupcakeOnPlate=false
                    else{
                        cupcake.changeYBy(1)
                        basic.pause(200)
                    }
                }
                if(input.acceleration(Dimension.Y)<(-1)*tolerance){
                    if(cupcake.y()==0)
                        cupcakeOnPlate=false
                    else{
                        cupcake.changeYBy(-1)
                        basic.pause(200)
                    }
                }    

            }
            
            cupcake.delete()
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
        } 
        else{
            basic.showNumber(5)
            basic.pause(250)
            basic.clearScreen()
            basic.pause(250)
        }
    }
})