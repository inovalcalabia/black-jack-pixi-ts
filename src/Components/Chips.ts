import * as PIXI from 'pixi.js-legacy';

export default class Chips extends PIXI.Container {
    constructor(_chip: string) {
        super();
        const chip = new PIXI.Sprite(PIXI.Texture.from(_chip));
        this.addChild(chip);
    }
}