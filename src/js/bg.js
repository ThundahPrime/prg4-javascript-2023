import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js"

export class bg extends Actor {

    onInitialize(engine){
        this.graphics.use(Resources.bg.toSprite())
        this.pos = new Vector (400,300)
        this.vel = new Vector (0,0)
        this.scale = new Vector (2,2)
    }
}