class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {

    const scene = this.scene;

    let key = 0;

    let playerLabels = [];

    players[category].forEach(function (player, i) {
      this.add.text(240 + i * 480, 750, (i + 1) + '. ' + player)
        .setFont('Impact')
        .setFontSize(64)          
        .setOrigin(0.5)
        .setColor('#000000');
    }.bind(this));

    this.add.text(50, 50, statements[category][statement])
      .setFont('Arial')
      .setFontSize(56)
      .setColor('#000000')
      .setFontStyle('bold')
      .setWordWrapWidth(1820);

    this.input.keyboard.on('keydown', function (event) {

      if (key === 0 && event.key < players[category].length + 1) {
        key = event.key;
        if (!key) {
          return;
        }
        

        this.add.text(720, 800, '✔')
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#00ff00')
          .setInteractive()
          .on('pointerup', function () {            
            answers[statement] = key;
            points[key - 1] = points[key - 1] > 0 ? points[key - 1] + 1 : 1;
            console.log(answers);
            console.log(points);
            if (statement < statements[category].length - 1) {
              statement += 1;
              scene.restart();
            } else {
              scene.start('EndScene');
            }
          });
        this.add.text(890, 800, '/')
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#000000')
        this.add.text(940, 800, '✖')
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#ff0000')
          .setInteractive()
          .on('pointerup', function () {
            scene.restart();
          });
      }

    }.bind(this));
  }
}