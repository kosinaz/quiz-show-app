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

    statements = this.cache.json.get('statements');
    players = this.cache.json.get('players');

    let key = 0;

    this.add.image(0, 0, 'bg').setOrigin(0);

    this.add.text(480, 50, 'Marvel')
      .setFont('Arial')
      .setFontSize(64)          
      .setOrigin(0.5)
      .setFontStyle('bold')
      .setColor('#ffffff')
      .setStroke('#000000', 8)
      .setInteractive()
      .on('pointerup', function () {
        category = 'mcu';
        this.scene.start('GameScene');
      }, this);

    this.add.text(1440, 50, 'Harry Potter')
      .setFont('Arial')
      .setFontSize(64)          
      .setOrigin(0.5)
      .setFontStyle('bold')
      .setColor('#ffffff')
      .setStroke('#000000', 8)
      .setInteractive()
      .on('pointerup', function () {
        category = 'hp';
        this.scene.start('GameScene');
      }, this);

    this.input.keyboard.on('keydown', function (event) {
      if (key === 0 && event.key < 7) {
        key = event.key;
        if (!key) {
          return;
        }
        if (event.key < players.mcu.length + 1) {
          this.add.text(480, 800, key + '. ' + players.mcu[key - 1])
            .setFont('Arial')
            .setFontSize(64)          
            .setOrigin(0.5)
            .setFontStyle('bold')
            .setColor('#ffffff')
            .setInteractive()
            .on('pointerup', function () {
              scene.restart();
          });
        }
        if (event.key < players.hp.length + 1) {
          this.add.text(1440, 800, key + '. ' + players.hp[key - 1])
            .setFont('Arial')
            .setFontSize(64)          
            .setOrigin(0.5)
            .setFontStyle('bold')
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