import * as PIXI from 'pixi.js-legacy';
import Button from './../Components/Button';
import Resources from './../Utils/Resources';
import Table from './../Components/Table';
import BetPanel from './../Components/BetPanel';
import Poker from './../Components/Poker';

export default class Game extends PIXI.Container {
    private static readonly GAME_WIDTH = 1280;
    private static readonly GAME_HEIGHT = 720;

    private app: PIXI.Application | undefined;
    private rabbit: string = './assets/rabbit.png';
    private betPanel: BetPanel | undefined;
    private table: Table | undefined;
    private poker: Poker | undefined;
    constructor() {
        super();
        Resources.load(this.onAssetsLoaded.bind(this));
    }
    private onAssetsLoaded(): void {
        this.createRenderer();

        const stage = this.app!.stage;
        this.table = new Table();
        stage.addChild(this.table);

        this.betPanel = new BetPanel();
        stage.addChild(this.betPanel);
        this.betPanel.y = 580;

        this.poker = new Poker('1');
        this.poker.x = this.poker.y = 300;
        stage.addChild(this.poker);

        this.app!.ticker.add(() => {
        });
    }
    private createRenderer(): void {
        this.app = new PIXI.Application({
            backgroundColor: 0xd3d3d3,
            width: Game.GAME_WIDTH,
            height: Game.GAME_HEIGHT,
        });

        document.body.appendChild(this.app.view);
        var ratio = Math.min(window.innerWidth/ Game.GAME_WIDTH, window.innerHeight/ Game.GAME_HEIGHT);
        this.app.stage.scale.x = this.app.stage.scale.y = ratio;
        this.app.renderer.resize(Math.ceil( Game.GAME_WIDTH * ratio), Math.ceil( Game.GAME_HEIGHT * ratio));
        window.addEventListener("resize", this.onResize.bind(this));
    }
    private onResize(): void {
        if (!this.app) {
            return;
        }
        var ratio = Math.min(window.innerWidth/ Game.GAME_WIDTH, window.innerHeight/ Game.GAME_HEIGHT);
        this.app.stage.scale.x = this.app.stage.scale.y = ratio;
        this.app.renderer.resize(Math.ceil( Game.GAME_WIDTH * ratio), Math.ceil( Game.GAME_HEIGHT * ratio));
    }

}