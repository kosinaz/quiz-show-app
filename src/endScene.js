class EndScene extends Phaser.Scene {
    constructor() {
      super('EndScene');
    }
  
    preload() {
  
      this.load.image(
        'end',
        'assets/images/end.jpg'
      );
    }
  
    create() {

      let winner = players[category][points.indexOf(Math.max(...points))];

      this.add.text(960, 150, 'A győztes ház:\n' + winner)
        .setFont('Arial')
        .setFontSize(48)
        .setFontStyle('bold')
        .setAlign('center')
        .setLineSpacing(24)
        .setOrigin(0.5, 0)
        .setColor('#000000')
        .setWordWrapWidth(1820);

      this.add.image(960, 420, winner).setOrigin(0.5);

      let spacing = 1920 / (players[category].length * 2);  
      players[category].forEach(function (player, i) {      
        this.add.text(spacing + i * spacing * 2, 675, (i + 1) + '.\n' + player)
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