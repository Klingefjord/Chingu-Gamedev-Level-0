"use strict"
// Global variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imageManager;
var questionMark;
var goombaAnimations;

// init() is called when the <body> is loaded
function init() {

  imageManager = new ImageManager();
  imageManager.load({

    "enemiesSheet": 'Assets/img/Enemies.png',
    "itemkSheet": 'Assets/img/Item and Brick Blocks.png',
    "objectsSheet": 'Assets/img/Items & Objects.png',
    "mario": 'Assets/img/mario.png',
    "tileSet": 'Assets/img/Tileset.png',
    "tileSetMapBank": 'Assets/img/World 1-1_cut_bank.png',
    "textSheet": 'Assets/img/Time Up Game Over Screens and Text.png',
    "titleSheet": 'Assets/img/Title Screen.png'

  }, onLoaded, onProgress);
}

function onProgress(loaded, total, key, path, success) {
  if (success) {
    // Progress bar
    console.log("loaded " + loaded + " from " + total + " images");
  } else {
    // Error handling
    console.log("ERROR: Image not loaded " + path);
  }
}

function onLoaded() {
  console.log("All images loaded");
  tileSet = imageManager.get("tileSet"); // tileSet is declered in map.js
  tileSetMapBank = imageManager.get("tileSetMapBank"); // tileSetMapBank is declered in map.js
  marioSprite = imageManager.get("mario");    //  marioSprite is declered in player.js
  enemiesSheet = imageManager.get("enemiesSheet"); // enemiesSheet is declared in enemey.js

  questionMark = new FramesSetToAnimate(tileSet, ctx, questionMarkFrames, tileSize);
  goombaAnimations = new FramesSetToAnimate(enemiesSheet, ctx, goombaFrames, 40);


  tilesInit(); //Fill the tileX, tileY arrays
  loop();

}

// Setup
// x, y, direction (0 = left, 1 = right)
var goomba = new Goomba(1000 + mapOffsetX, 100, 0);
//var goomba2 = new Goomba(800, canvas.height - 120, 0);

// Game loop
function loop() {
  mapDraw();
  marioDraw();
  marioAnimations();
  marioStatus();
  marioMoving();
  if (marioX + mapOffsetX > 800) {
    goomba.update();
  }
  //goomba2.update();
  updateScreenPosition();
  testOfCollision();


  setTimeout(loop, 17);
}


/**
 * @param frames - array with [x,y,width,height] every frames coordinates and size on spriteSheet
 */
var questionMarkFrames = [
  [384, 0, 16, 16],
  [400, 0, 16, 16],
  [416, 0, 16, 16]
];

var goombaFrames = [
  [0, 16, 16, 16],
  [16, 16, 16, 16],
  [0, 16, 16, 16],
  [16, 16, 16, 16]
]
