const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1920,
  height: 900,
  backgroundColor: '#ffffff',
  parent: "game-container",
  pixelArt: true,
  scene: [StartScene, GameScene, EndScene]
});

let statement = 0;
let answers = [];
let players = [
  {
    name: 'Vasember',
    point: 0
  },
  {
    name: 'Amerika Kapitány',
    point: 0
  },
  {
    name: 'Thor',
    point: 0
  },
  {
    name: 'Hulk',
    point: 0
  },
  {
    name: 'Fekete Özvegy',
    point: 0
  },
  {
    name: 'Sólyomszem',
    point: 0
  }
];