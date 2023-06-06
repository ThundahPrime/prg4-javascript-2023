import { Actor, Engine, Vector, Label, Color, Font, Physics } from "excalibur";
import { GamePlay } from "./gameplay"
import { Start } from "./start"
import { player } from "./player"
import { filth } from "./filth"
import { enemy } from "./enemy"
import { Resources,ResourceLoader } from "./resources.js"
import { Dead } from "./dead"

export class Game extends Engine {
    
    player
    enemy
    
    constructor() {
        super({ width: 800, height: 600 });
        this.player = new player(this)
        this.enemy = new enemy(this)
        this.start(ResourceLoader).then(() => this.startGame());
        Physics.useArcadePhysics();
        Physics.gravity = new Vector (200,1200)
        this.showDebug(true)
    }

    startGame() {
    this.addScene('Start', new Start())
    this.addScene('GamePlay', new GamePlay())
    this.addScene('Dead', new Dead())
    
    this.goToScene('Start')
}
}

new Game();