/* 
Jiying (Angela) Jiang
Piedra Regular font by Sudtipos: https://fonts.google.com/specimen/Piedra?preview.text_type=custom#standard-styles
Music: 'Clear day' by Ben Sound
SFX SE_refresh by Chanhun: https://freesound.org/people/Chanhun/sounds/161322/


~Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (25)
~Create a new scrolling tile sprite for the background (10)



*/


// game configuration object
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000   
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;