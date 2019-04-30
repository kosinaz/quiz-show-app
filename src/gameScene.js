class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {

    const scene = this.scene;

    let key = 0;

    const titles = [
      '1. Vasember',
      '2. Hulk',
      '3. Thor',
      '4. Amerika Kapitány',
      '5. Bosszúállók',
      '6. Galaxis Őrzői',
      '7. Hangya',
      '8. Bosszúállók 2.',
      '9. Doctor Strange',
      '10. Pókember',
      '11. Fekete Párduc',
      '12. Bosszúállók 3.',
      '13. Marvel Kapitány',
      '13+1. Marvel Moziverzum'
    ];
    const statements = [
//      'Lórum ipse, a hatlanc mélső fili lesz a tetlet, ma goloma aggság. A koránság akomosságába be van építve egy felzetvetes, múlékos karc - a ködönb -, melyen a mékos erelzetek tüldi kaléját nyüvenítették, s így a rögségök folyamán eléggé szemetett ahhoz, hogy lenészre a vénységre a fosztó erelzeteknek is pasztjon.',
      'Vasembernek 3 filmre van szüksége, hogy megtanulja, nem a páncél teszi az embert. \n\nA 3 film során ellenségei Obadiah Stane, és Ivan Vanko, valamint barátai, James Rhodes, Bruce Banner és Pepper Potts egyaránt magukra öltik a páncélt, ám az egyetlen igazi Vasember mégis Tony Stark marad.',
      'Hulk hosszú bújkálás után a gyógyír reményében visszatér Amerikába, ahol azonban többen is útját állják: \napósjelöltje, Ross tábornok, a gamma robbanás másik áldozata, Förtelem, és a gonosz tudós, Dr.Samuel Sterns.',
      'Thor, Asgard királya a 3 film során az északi mitológia több világában is győztes csatákat vív, míg végül vereséget nem szenved, és eléri a Ragnarök. \n\nJotunheimben a jégóriásokat győzi le, Svartalfheimben sötét elfeket, Nidavellirben a törpéket, Muspelheimben pedig tűzdémonokat.',
      'Amerika Kapitány a hazafiasság mintaképe.\n3 filmje során az első Bosszúállóként küzd a nácik ellen, majd legyőzi és ismét maga mellé állítja a Tél katonáját, a bosszúállók Polgárháborúja során pedig azért, hogy elfogadtassa Sokoviai Egyezményt még Vasemberrel is hajlandó szembeszállni.',
      'A Bosszúállók megalakulásukat a Tesszeraktnak köszönhetik. \nAmerika Kapitány a kocka miatt zuhan le az Északi Sarkon, Sólyomszem és Fekete Özvegy a kockát őrző S.H.I.E.L.D. ügynöke, Bruce Bannert a kocka által kibocsájtott gamma sugár szakértőjeként hívják a helyszínre, Vasember toronyháza felett pedig a kocka nyitja meg a Chitauri kaput, míg végül Thor vissza nem viszi Lokival együtt Asgardba.',
      'A Galaxis Őrzőinek alapító tagjai a Xandaron találkoznak először.\n\nGamora az Űrlordnál lévő Gömböt akarja, Drax Gamorát akarja megölni, Mordály és Groot pedig az Űrlord fejére kitűzött vérdíjra pályázik. Ám végül mindannyiukat elfogja a Nova hadtest és a Kyln nevű börtönbolygóra szállítja.',
      'Scott Lang, a második Hangya sohasem volt neves kutató, mint társai Hank Pym, Janet Van Dyne, és Hope van Dyne, vagy esküdt ellensége Darren Cross. \n\nEgyszerű tolvajként kezdte csupán, mégis ő volt az első, aki visszatért a kvantum világból, és az első aki óriásira növekedett.',
      'A Bosszúállók második küldetése Ultron és robotseregének legyőzéséről szól.\n\nUltront a Maximoff testvérek segítik világpusztító terveinek véghez vitelében. Pietro, másnéven Higanyszál életét áldozza Ultronért, Wanda, azaz Skarlátboszokány viszont úgy dönt átáll a Bosszúállók oldalára.',
      'Doctor Strange sikeres idegsebész, ám autóbalesete következtében félbeszakad orvosi karrierje. \n\nA gyógyulás reményében végül a Kamar-Taj tanulója lesz, rövidesen pedig már ő védelmezi a Föld misztikus pajzsát fenntartó 3 szanktumot, New Yorkban, Londonban, és Tokióban.',
      'Pókember életét teljesen megváltoztatja a Polgárháború.\n\nAz események után immár Tony Stark támogatása alatt folytatja bűnüldöző tevékenységét. Így kerül szembe a Keselyűvel, aki a HYDRA által fejlesztett fegyverekkel garázdálkodik, és még Pókember valódi kilétére is fényt derít.',
      'T\'Challa apja halála után hazatér Wakandába, ám ahhoz, hogy elfoglalja méltó helyét a trónon rituális párbajban kell megölnie kihívóit, a Jabari törzs, főnökét M\'Bakut, majd saját unokatestvérét, Erik Killmongert. \n\nVégül győzedelmeskedik, elfoglalja helyét Wakanda trónján, és megnyitja kapuit a világ előtt.',
      'A Bosszúállók első igazi vereségüket a Végtelen Háborúban szenvedik el.\n\nA wakandai csatatéren Amerika Kapitány, Thor, Hulk, Fekete Özvegy, Sólyom és Mordály nézi végig tehetetlenül, ahogy társaik porrá omlanak szét, a Titánon pedig csupán Vasember és Nebula marad életben.',
      'Marvel Kapitány az amerikai légierő egykori pilótája, a Csillagosztag nevű Kree katonai elit alakulat hőse, csakúgy mint a Galaxis Őrzőinek leendő ellenségei, a harcias Korath és a radikális Ronan.\nA csapat Skrull menekültek üldözése közben a Földre érkezik, ahol Carol végül visszaemlékezik múltjára, és gondoskodik egykori alakulatának végérvényes feloszlásáról.',
      'A 6 végtelen kő végigkíséri a Marvel Moziverzum egészét.\n\nA Tér kőre Vörös Koponya talál rá a norvégiai Tønsbergben, a Valóság kőre Jane Foster Svartalfheimben, a sötét elfek birodalmában, a Hatalom kőre pedig Űrlord Moragon.\nAz Elme kő már kezdettől fogva Thanosnál volt, az Idő kő A Misztikus Tanok Mestereinél, a Lélek kő pedig Vormiron.'
    ];

    this.add.text(50, 30, titles[statement])
      .setFont('Impact')
      .setFontSize(64)
      .setColor('#000000')

    this.add.text(50, 150, statements[statement])
      .setFont('Arial')
      .setFontSize(56)
      .setColor('#000000')
      .setFontStyle('bold')
      .setWordWrapWidth(1820);

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
          .setColor('#000000')   
        this.add.text(50, 800, 'Talált')
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#00ff00')
          .setInteractive()
          .on('pointerup', function () {            
            answers[statement] = key;
            players[key - 1].point += 1;
            console.log(answers);
            if (statement < 13) {
              statement += 1;
              scene.restart();
            } else {
              scene.start('EndScene');
            }
          });
        this.add.text(210, 800, '/')
          .setFont('Impact')
          .setFontSize(64)
          .setColor('#000000')
        this.add.text(250, 800, 'Nem talált')
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