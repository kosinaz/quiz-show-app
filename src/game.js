const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 3000,
  height: 1000,
  parent: "game-container",
  pixelArt: true,
  scene: [StartScene, GameScene]
});

let statement = 0;