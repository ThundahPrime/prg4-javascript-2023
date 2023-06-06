import { Scene } from 'excalibur'
import { player } from "./player"
import { floor } from "./floor"
import { bg } from "./bg.js"
import { filth } from "./filth"
import { enemy } from "./enemy"
import { Resources } from "./resources.js"

export class GamePlay extends Scene {
    onInitialize(engine) {
        this.add(new bg())
        this.add(new floor())
        this.add(new player())
        this.add(new filth(200,100))
        this.add(new filth(700,100))
    }
}