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
  
      let hero = 0;
      const heroes = [
        '1. Vasember',
        '2. Amerika Kapitány',
        '3. Thor',
        '4. Hulk',
        '5. Fekete Özvegy',
        '6. Sólyomszem'
      ];
  
      this.add.image(0, 0, 'end').setOrigin(0);
      points.sort((a, b) => parseFloat(b.point) - parseFloat(a.point));
      console.log(points);
  
      let first = this.add.text(1350, 150, '1.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
            first.text = '1. ' + points[0].name;
        });
    
        let second = this.add.text(1350, 250, '2.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
            second.text = '2. ' + points[1].name;
        });

        let third = this.add.text(1350, 350, '3.')
        .setFont('Impact')
        .setFontSize(64)
        .setColor('#ffffff')
        .setInteractive()
        .on('pointerup', function () {
          third.text = '3. ' + points[2].name;
        });
  
    }
  
  }