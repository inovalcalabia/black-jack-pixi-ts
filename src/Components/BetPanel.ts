import * as PIXI from 'pixi.js-legacy';
import Chips from './Chips';

export default class BetPanel extends PIXI.Container {
    private static readonly CHIP_SET = ['1', '5', '25', '50', '100']
    constructor() {
        super();
        for (let x:number = 0; x < 13; x += 1) {
            const betPanel = new PIXI.Sprite(PIXI.Texture.from("footer"));
            betPanel.x = (betPanel.width - 2) * x;
            this.addChild(betPanel);
        }
        for (let i: number = 0; i < BetPanel.CHIP_SET.length; i += 1) {
            let chips:Chips = new Chips('chip' + BetPanel.CHIP_SET[i]);
            this.addChild(chips);
            chips.y = 25;
            chips.x = 10 + (chips.width + 10) * i;
        }
    }    
}