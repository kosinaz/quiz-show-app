class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  preload() {
    this.load.image('bg', 'assets/images/bg.jpg');
    this.load.json('statements', 'data/statements.json');
    this.load.json('players', 'data/players.json');
  }

  create() {

    const scene = this.scene;

    statements = this.cache.json.get('statements');
    players = this.cache.json.get('players');

    let key = 0;

    this.add.image(0, 0, 'bg').setOrigin(0);

    this.add.text(480, 50, 'Marvel')
      .setFont('Impact')
      .setOrigin(0.5)
      .setFontSize(64)
      .setColor('#ffffff')
      .setInteractive()
      .on('pointerup', function () {
        category = 'mcu';
        scene.start('GameScene');
    });

    this.add.text(1440, 50, 'Harry Potter')
      .setFont('Impact')
      .setOrigin(0.5)
      .setFontSize(64)
      .setColor('#ffffff')
      .setInteractive()
      .on('pointerup', function () {
        category = 'hp';
        scene.start('GameScene');
    });

    this.input.keyboard.on('keydown', function (event) {
      if (key === 0 && event.key < 7) {
        key = event.key;
        if (!key) {
          return;
        }
        if (event.key < players.mcu.length + 1) {
          this.add.text(480, 800, key + '. ' + players.mcu[key - 1])
            .setFont('Impact')
            .setFontSize(64)          
            .setOrigin(0.5)
            .setColor('#ffffff')
            .setInteractive()
            .on('pointerup', function () {
              scene.restart();
          });
        }
        if (event.key < players.hp.length + 1) {
          this.add.text(1440, 800, key + '. ' + players.hp[key - 1])
            .setFont('Impact')
            .setFontSize(64)          
            .setOrigin(0.5)
            .setColor('#ffffff')
            .setInteractive()
            .on('pointerup', function () {
              scene.restart();
          });
        }
      }
    }.bind(this));

  }

}