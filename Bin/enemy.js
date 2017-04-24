"use strict";
var enemiesSheet;

// goomba constructor function
function Goomba(x, y, direction) {
  this.speed = 1;
  this.x = x;
  this.y = y;
  this.dead = false;
  this.dir = direction;
  this.arrayX = Math.floor((mapOffsetX + this.x + (tileSize / 2)) / tileSize);
  this.arrayY = Math.floor(this.y / tileSize);
  // this.gravity = 1;

  // updates position and draws goomba
  this.update = function() {
    this.arrayX = Math.floor((mapOffsetX + this.x + (tileSize / 2)) / tileSize) + 1;
    this.arrayY = Math.floor(this.y / tileSize) + 1;

    if (!this.dead) {
      if (this.dir === 0) {
        this.x -= this.speed; //left
      } else if (this.dir === 1) {
        this.x += this.speed; //right
      }
      goombaAnimations.draw(this.x, this.y);
      // fall down if tile underneath is not floor

      console.log("here: ", this.arrayX, this.arrayY);
      if (obstaclesTiles.indexOf(map[this.arrayY][this.arrayX]) === -1) {
        this.y += 4;
      }


//obstaclesTiles.indexOf(map[Math.floor((marioY + tileSize) / tileSize)][marioArrayPosX]) !== -1)

      // stop if wall is hit



    }

    // if dead
    else {
      // die animation
      this.die();
    }
  }

  // die - trigger this when being squashed by mario
  this.die = function() {
    this.dead = true;
  }
}
