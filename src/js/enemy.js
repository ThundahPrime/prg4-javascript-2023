import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js"
import { player } from "./player"
import { Dead } from "./dead"
import { GamePlay } from "./gameplay"

export class enemy extends Actor {

    game
    x
    y
    engine;

    onInitialize(engine) {
        this.engine = engine
        // this.engine.addScene('GamePlay', new GamePlay())
        console.log("test")
        this.on('collisionstart', (event) => this.hitPlayer(event))
        this.body.useGravity = true;
    }

    hitPlayer(event) {
        if (event.other instanceof player) {
        this.engine.goToScene('Dead')
        this.kill.enemy
        }
    }
}