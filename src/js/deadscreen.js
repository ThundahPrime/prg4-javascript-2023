import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js"

export class deadscreen extends Actor {

    onInitialize(engine){
        this.graphics.use(Resources.dead.toSprite())
        this.pos = new Vector (400,300)
        this.vel = new Vector (0,0)
    }
    constructor() {
        super({
            width: Resources.floor.width,
            height: Resources.floor.height,
            collisionType: CollisionType.Fixed,
        });
        this.body.useGravity = false
    }
}