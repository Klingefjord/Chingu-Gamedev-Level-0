"use strict";
var enemiesSheet;

// goomba constructor function
function Goomba(x, y, direction) {
  this.speed = 1;
  this.x = x;
  this.y = y;
  this.dead = false;
  this.dir = direction;
  // this.gravity = 1;

  // updates position and draws goomba
  this.update = function() {
    if (!this.dead) {
      if (this.dir === 0) {
        this.x -= this.speed; //left
      } else if (this.dir === 1) {
        this.x += this.speed; //right
      }
      goombaAnimations.draw(this.x, this.y);

      // fall down if tile underneath is not floor
      if ()


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
