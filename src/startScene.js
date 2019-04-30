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

    let hero = 0;
    const heroes = [
      '1. Vasember',
      '2. Amerika Kapitány',
      '3. Thor',
      '4. Hulk',
      '5. Fekete Özvegy',
      '6. Sólyomszem'
    ];

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
      if (hero === 0) {
        if (event.key === '1') {
          hero = 1;
        } else if (event.key === '2') {
          hero = 2;
        } else if (event.key === '3') {
          hero = 3;
        } else if (event.key === '4') {
          hero = 4;
        } else if (event.key === '5') {
          hero = 5;
        } else if (event.key === '6') {
          hero = 6;
        }
        if (!hero) {
          return;
        }
        this.add.text(50, 700, heroes[hero - 1])
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