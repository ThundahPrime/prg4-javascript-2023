import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js"

export class floor extends Actor {

    onInitialize(engine){
        this.graphics.use(Resources.floor.toSprite())
        this.pos = new Vector (400,1000)
        this.vel = new Vector (0,0)
        this.scale = new Vector (3,3)
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