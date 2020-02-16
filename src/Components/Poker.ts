import * as PIXI from 'pixi.js-legacy';
import { TweenMax } from "gsap";

export default class Poker extends PIXI.Container {
    private static readonly FLIP_SPEED: number = 0.2;

    private poker:PIXI.Sprite;
    private back:PIXI.Sprite;

    constructor(_poker:string) {
        super();
      

        this.poker = new PIXI.Sprite(PIXI.Texture.from(_poker));
        this.poker.scale.set(0.0, 0.4);
        this.poker.anchor.set(0.5, 0.5);
        this.addChild(this.poker);

        this.back = new PIXI.Sprite(PIXI.Texture.from('blue'));
        this.back.scale.set(0.4, 0.4);
        this.back.anchor.set(0.5, 0.5);
        this.addChild(this.back);

        // setInterval((()=>{ 
        //     new PIXI.animate.Tween(back,  1, 2,100, 1);
        // }).bind(this), 2000);
        //console.log(ANIMATE);
        // setInterval(this.flip.bind(this), 2000);
    }
    flip() {
        if (this.back.scale.x > 0) {
            TweenMax.to(this.back.scale, Poker.FLIP_SPEED, {x: 0})
            TweenMax.to(this.poker.scale, Poker.FLIP_SPEED, {x: 0.4, delay: Poker.FLIP_SPEED});
        } else {
            TweenMax.to(this.poker.scale, Poker.FLIP_SPEED, {x: 0})
            TweenMax.to(this.back.scale, Poker.FLIP_SPEED, {x: 0.4, delay: Poker.FLIP_SPEED});
        }
    }
    getCard() {
        TweenMax.to(this.back, Poker.FLIP_SPEED, {x: 0, y: 0, rotation: 0});
        TweenMax.to(this.poker, Poker.FLIP_SPEED, {x: 0, y: 0, rotation: 0});
    }
}