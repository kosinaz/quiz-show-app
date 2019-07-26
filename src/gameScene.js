class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    let key = 0;
    let spacing = 1920 / (players[category].length * 2);

    players[category].forEach(function (player, i) {      
      this.add.text(spacing + i * spacing * 2, 740, (i + 1) + '\n' + player)
        .setFont('Arial')
        .setFontSize(48)          
        .setOrigin(0.5, 0)
        .setFontStyle('bold')
        .setAlign('center')
        .setColor('#000000');
      this.add.text(spacing + i * spacing * 2, 850, points[i])
        .setFont('Arial')
        .setFontSize(48)          
        .setOrigin(0.5, 0)
        .setFontStyle('bold')
        .setAlign('center')
        .setColor('#000000');
    }.bind(this));

    this.add.text(50, 50, statements[category][statement])
      .setFont('Arial')
      .setFontSize(48)
      .setFontStyle('bold')
      .setLineSpacing(24)
      .setColor('#000000')
      .setWordWrapWidth(1820);

    this.input.keyboard.on('keydown', function (event) {

      if (key === 0 && event.key < players[category].length + 1) {
        key = event.key;
        if (!key) {
          return;
        }
        this.add.text(spacing + (key - 1) * spacing * 2, 840, '✔  ')
          .setFont('Arial')
          .setFontSize(64)
          .setColor('#00ff00')          
          .setOrigin(1, 0)
          .setInteractive()
          .on('pointerup', function () {            
            answers[statement] = key;
            points[key - 1] = points[key - 1] > 0 ? points[key - 1] + 1 : 1;
            console.log(answers);
            console.log(points);
            if (statement < statements[category].length - 1) {
              statement += 1;
              this.scene.restart();
            } else {
              this.scene.start('EndScene');
            }
          }, this);
        this.add.text(spacing + (key - 1) * spacing * 2, 840, '  ✖')
          .setFont('Arial')
          .setFontSize(64)          
          .setOrigin(0, 0)
          .setColor('#ff0000')
          .setInteractive()
          .on('pointerup', function () {
            this.scene.restart();
          }, this);
      }

    }.bind(this));
  }
}