class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  preload() {

    this.load.image(
      'bg',
      'assets/images/bg.jpg'
    );
  }

  create() {

    const scene = this.scene;

    let key = 0;

    this.add.image(0, 0, 'bg').setOrigin(0);

    this.add.text(960, 50, 'Végjáték')
      .setFont('Impact')
      .setOrigin(0.5)
      .setFontSize(64)
      .setColor('#ffffff')
      .setInteractive()
      .on('pointerup', function () {
        scene.start('GameScene');
      });

    this.input.keyboard.on('keydown', function (event) {
      if (key === 0) {
        if (event.key === '1') {
          key = 1;
        } else if (event.key === '2') {
          key = 2;
        } else if (event.key === '3') {
          key = 3;
        } else if (event.key === '4') {
          key = 4;
        } else if (event.key === '5') {
          key = 5;
        } else if (event.key === '6') {
          key = 6;
        }
        if (!key) {
          return;
        }
        this.add.text(50, 700, key + '. ' + players[key - 1].name)
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#ffffff')
          .setInteractive()
          .on('pointerup', function () {
            scene.restart();
        });
      }
    }.bind(this));

  }

}