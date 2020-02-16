import * as PIXI from 'pixi.js-legacy';
import Game from './Components/Game';
class Main {
    constructor() {
        window.PIXI = PIXI;
        window.onload = (): void => {
            // this.startLoadingAssets();
            // Resources.load(this.onAssetsLoaded.bind(this));
            new Game();
        };
    }
    
}
new Main();