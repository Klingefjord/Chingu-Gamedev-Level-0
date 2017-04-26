'use strict';
var marioArrayPosY;
var marioArrayPosX;

var testOfCollision = function () {
  marioArrayPosY = Math.floor(marioY / tileSize); // calculate Y row in map array
  marioArrayPosX = Math.floor((mapOffsetX + marioX + (tileSize / 2)) / tileSize); // calculate X column in map array


  // if mario is jumping to hight OR tile above his head is comming from "obstaclesTiles" array take him down with gravity
  if ( (jumpStatus && marioY-4 <= 0) || ( jumpStatus && backgroundTiles.indexOf(map[Math.floor(marioY / tileSize)][marioArrayPosX]) === -1)) {
    gravity = 10;
  }

  // check if tile under Mario is comming from 'obstaclesTiles' array, if so - stay on that Y pos.
  if ((marioY + tileSize) < tileSize * 16
    // && map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX] !== 1 ) {
    && obstaclesTiles.indexOf(map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX]) !== -1) {

    marioY = tileSize * marioArrayPosY; //  stay on that Y pos.
    jumpStatus = false;
    jumpCounter = 0;
    marioSuspension = false;
    marioLanded = true;
    gravity = 0;

  } else {
    jumpStatus = true;
    jumpCounter = 0;
    marioSuspension = false;
    marioLanded = false;
  }

  // check if mario jumps on goomba


  // if mario want to go thru the objects or out of canvas in X axel - stop him
  if (direction === 1
    && obstaclesTiles.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX + tileSize + 1) / tileSize)]) !== -1) {

    marioDX = 0;
  } else if (direction === -1
    && obstaclesTiles.indexOf(map[marioArrayPosY][Math.floor((mapOffsetX + marioX - 1) / tileSize)]) !== -1) {

    marioDX = 0;
  } else if ((direction === -1 && marioX <= 0) || (direction === 1 && marioX+ tileSize >= canvas.width)) { // if Mario want to go out of the screen (canvas)
    marioDX = 0;

  } else {
    marioDX = 4;
  }

  // if Mario hits question mark (nr 12 in map array)
  if ((marioY + tileSize) < tileSize * 16
    && map[marioArrayPosY][marioArrayPosX] === 12) {
    map[marioArrayPosY][marioArrayPosX] = 'questionMarkOFF';
    // TODO start animation with coin once
  }




}
