const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1920,
  height: 900,
  backgroundColor: '#ffffff',
  parent: "game-container",
  pixelArt: true,
  scene: [StartScene, GameScene, EndScene, BonusScene]
});

let statement = 0;
let category = "";
let players = [];
let statements = [];
let answers = [];
let points = [];