"use strict";
var enemiesSheet;


//  Setup -----------------------------------------------------

// array for holding goombas
var goombas = [];

// Create new goomba object and store in goombas array
function spawnGoomba(x, y, dir) {
  // x, y, direction (0 = left, 1 = right)
  goombas.push(new Goomba(x, y, dir));
}

//  -----------------------------------------------------------


// goomba constructor function --------------------------------
function Goomba(x, y, direction) {
  this.speed        = 1;
  this.x            = x;
  this.y            = y;
  this.dead         = false;
  this.dir          = direction;
  this.arrayX       = Math.floor((this.x) / tileSize);
  this.arrayY       = Math.floor(this.y / tileSize);
  this.squashDelay  = 50;

  // updates position and draws goomba
  this.update = function() {
    this.arrayX = Math.floor((this.x) / tileSize);
    this.arrayY = Math.floor(this.y / tileSize);

    if (this.arrayY < 15 && !this.squashed) {
      if (this.dir === 0) {
        if (obstaclesTiles.indexOf(map[this.arrayY][this.arrayX]) === -1) {
          this.x -= this.speed; //left
        } else {
          this.dir = 1;
        }
      }
    if (this.dir === 1) {
      if (obstaclesTiles.indexOf(map[this.arrayY][this.arrayX + 1]) === -1) {
        this.x += this.speed; //left
      } else {
        this.dir = 0;
      }
    }

      // fall down if not on "floor"
      if (obstaclesTiles.indexOf(map[this.arrayY + 1][this.arrayX + 1]) === -1) {
        this.y += 10;
      }
      goombaAnimations.draw(this.x, this.y);

    } else if (this.arrayY > 15) {
      //falls out of screen
      this.die();
    }
  }




  // die - trigger this when being squashed by mario
    this.die = function() {
      let posX = this.x;
      let posY = this.y;

      if (this.squashDelay > 0) {
        console.log("drawing");
        // ctx.beginPath();
        // ctx.rect(20, 20, 150, 100);
        // ctx.fillStyle = "red";
        // ctx.fill();
        ctx.drawImage(marioSprite, 210, 0, 16, 16, posX, posY, tileSize, tileSize);
      //  ctx.drawImage(enemiesSheet, 32, 0, 16, 16, posX, posY, tileSize, tileSize);
        this.squashDelay--;
      }
      this.dead = true;
    }

}
//  -----------------------------------------------------------
