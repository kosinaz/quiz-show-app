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
  
      const scene = this.scene;
  
      let key = 0;
  
      this.add.image(0, 0, 'end').setOrigin(0);
      players.sort((a, b) => parseFloat(b.point) - parseFloat(a.point));
      console.log(players);
  
      let first = this.add.text(1350, 150, '1.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
            first.text = '1. ' + players[0].name;
        });
    
        let second = this.add.text(1350, 250, '2.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
            second.text = '2. ' + players[1].name;
        });

        let third = this.add.text(1350, 350, '3.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
          third.text = '3. ' + players[2].name;
        });
  
    }
  
  }