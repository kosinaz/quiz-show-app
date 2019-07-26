class EndScene extends Phaser.Scene {
    constructor() {
      super('EndScene');
    }
  
    create() {

      let winner = players[category][points.indexOf(Math.max(...points))];

      this.add.text(960, 50, 'A győztes:\n' + winner)
        .setFont('Arial')
        .setFontSize(48)
        .setFontStyle('bold')
        .setAlign('center')
        .setLineSpacing(24)
        .setOrigin(0.5, 0)
        .setColor('#000000')
        .setWordWrapWidth(1820);

      this.add.image(960, 200, winner).setOrigin(0.5, 0)
        .setInteractive()
        .on('pointerup', function () {
          this.scene.start('BonusScene');
        }, this);

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

    }
  }