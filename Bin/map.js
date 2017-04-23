"use strict";
var tileSet; // this is spritet sheet with all tiles of background
var mapOffsetX = 0; // left side of the screen in pixels
var tileSetMapBank; // this is spritet sheet with all tiles of background from original level1-1

// var mapOffsetX = 7500; // start pos to development TESTS !!!!!!!!!!!!!!!!!!!!!

//Map is a 2D array
//Screen is 16 x 20 tiles (640 x 800px of 40px each)
var map =
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 1, 1, 1, 1, 6, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 1, 1, 1, 1, 6, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 1, 1, 1, 1, 6, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 1, 1, 1, 1, 6, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 1, 1, 1, 14, 14, 14, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 14, 1, 1, 1, 1, 14, 12, 12, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 19, 19, 19, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 14, 12, 14, 12, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 12, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 14, 14, 1, 1, 1, 1, 12, 1, 1, 12, 1, 1, 12, 1, 1, 1, 1, 1, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 1, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 1, 1, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 12, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 15, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 22, 23, 24, 1, 1, 1, 1, 1, 1,],
    [1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 1, 1, 1, 1, 1, 26, 27, 1, 1, 25, 1, 1, 1, 1, 1, 1, 26, 27, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 1, 1, 15, 15, 1, 1, 1, 1, 25, 1, 1, 1, 15, 15, 15, 1, 1, 15, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 15, 15, 15, 15, 1, 1, 1, 1, 25, 1, 1, 1, 16, 1, 1, 1, 19, 30, 30, 30, 19, 1, 1, 1, 1, 1,],
    [1, 31, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 1, 1, 1, 1, 1, 1, 1, 26, 27, 1, 1, 1, 1, 1, 1, 26, 27, 1, 31, 32, 33, 1, 1, 1, 1, 1, 26, 27, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 31, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 1, 1, 15, 15, 15, 1, 1, 31, 32, 33, 1, 15, 15, 15, 15, 1, 1, 15, 15, 15, 1, 1, 1, 25, 1, 20, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 15, 15, 15, 15, 15, 15, 15, 15, 1, 1, 1, 31, 32, 33, 1, 1, 16, 1, 1, 1, 23, 23, 36, 23, 23, 1, 1, 25, 1, 1,],
    [31, 32, 37, 38, 33, 1, 1, 1, 1, 1, 1, 39, 40, 40, 40, 41, 31, 32, 33, 1, 1, 1, 1, 39, 40, 41, 1, 1, 26, 27, 1, 1, 1, 1, 1, 1, 1, 1, 26, 27, 1, 39, 40, 40, 41, 1, 26, 27, 31, 32, 37, 38, 33, 1, 1, 1, 1, 26, 27, 39, 40, 40, 40, 41, 31, 32, 33, 1, 1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 39, 40, 40, 41, 1, 1, 1, 31, 32, 37, 38, 33, 1, 1, 1, 1, 1, 1, 39, 40, 40, 40, 42, 43, 44, 45, 1, 1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 15, 15, 40, 40, 15, 15, 15, 15, 31, 32, 37, 38, 15, 15, 15, 15, 15, 1, 1, 15, 15, 15, 15, 41, 31, 32, 33, 26, 27, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 26, 27, 15, 15, 15, 15, 15, 15, 15, 15, 15, 1, 1, 31, 32, 37, 38, 33, 1, 15, 1, 1, 1, 23, 23, 46, 23, 23, 41, 31, 32, 33, 1,],
    [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47,],
    [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 1, 1, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47,]
  ];

// those tails are invisible for Mario
var backgroundTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 22, 23, 24, 25, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];

// mario can walk on top of those tails elements and have a collision with them
var obstaclesTiles = [12, 13, 14, 15, 19, 20, 21, 26, 27, 30, 47, 'questionMarkOFF'];

var tileSize = canvas.height / 16; // Game map is 16 tiles high

// store tile data in 2 arrays. If you look at tileset, tileX and tileY would correspond to the coordinates of said tile.
// TODO: Maybe do this with 2d array instead?
var tileX = [],
  tileY = [];

function tilesInit() {
  for (var i = 0; i < tileSetMapBank.width / 16; i++) {
    tileX[i] = i * 16;
  }
  for (var i = 0; i < tileSetMapBank.height / 16; i++) {
    tileY[i] = i * 16;
  }
}


// draws the actual tile
function drawTile(x, y, inputX, inputY, correctionX, correctionY) {
  //tileSize = size of tile. inputX,Y = where from tilemap to crop. x,y = where to place tile.
  // (correction) it is to remove 1px line if needed
  correctionX = correctionX || 0;
  correctionY = correctionY || 0;
  ctx.drawImage(tileSetMapBank, inputX, inputY, 16 + correctionX, 16 + correctionY, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // minus mapOffsetX to draw only visible columns
}

// Loop that fills in tiles from map data

function updateScreenPosition() {

  if (marioX > canvas.width / 2                       // if Mario want to go further then middle of the screen
    && mapOffsetX + 20 * tileSize < 212 * tileSize) {  //and he is not at the end of the map
    if (rightPressed && running && !gameOver) {		//Running Right
      mapOffsetX += marioDX * 2;                  // how fast screen is scrolling when Mario is running
    } else {
      mapOffsetX += marioDX;                      // how fast screen is scrolling
    }
    marioX = canvas.width / 2;
  }
}

function mapDraw() {
  ctx.fillStyle = "#63adff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var y = 0; y < map.length; y++) {
    // for (var x = 0; x < map[y].length; x++) {   // draw all tiles on map

    var startX = Math.floor(mapOffsetX / tileSize);    // start to draw map from mapOffsetX
    for (var x = startX; x < startX + 21 && x < map[y].length; x++) {  // take canvas width and draw only visible tiles plus one extra on right side

      switch (map[y][x]) {
        case 1:
          ctx.drawImage(tileSetMapBank, tileX[0], tileY[0], 16, 15.5, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // sky
          break;
        case 2:
          drawTile(x, y, tileX[1], tileY[0], 0, -0.5); // cloud top left
          break;
        case 3:
          drawTile(x, y, tileX[2], tileY[0], 0, -0.5); // cloud top middle
          break;
        case 4:
          drawTile(x, y, tileX[3], tileY[0], 0, -0.5); // cloud top right
          break;
        case 5:
          drawTile(x, y, tileX[4], tileY[0]); //
          break;
        case 6:
          drawTile(x, y, tileX[5], tileY[0], 0, -1); // cloud bottom left
          break;
        case 7:
          drawTile(x, y, tileX[6], tileY[0], 0, -1); // cloud bottom middle
          break;
        case 8:
          drawTile(x, y, tileX[7], tileY[0], 0, -1); // cloud bottom right
          break;
        case 9:
          ctx.drawImage(tileSetMapBank, tileX[8], tileY[0], 16, 15, x * tileSize - mapOffsetX - 0.5, y * tileSize, tileSize, tileSize); // flag 1
          break;
        case 10:
          ctx.drawImage(tileSetMapBank, tileX[9], tileY[0], 16, 15, x * tileSize - mapOffsetX - 0.5, y * tileSize, tileSize + 1, tileSize); // flag 2
          break;
        case 11:
          ctx.drawImage(tileSetMapBank, tileX[10] + 1, tileY[0], 15, 15, x * tileSize - mapOffsetX - 0.5, y * tileSize, tileSize + 1, tileSize); // mast top
          break;
        case 12:
          questionMark.draw(x * tileSize, y * tileSize); // "animation" of question mark
          break;
        case 13:
          drawTile(x, y, tileX[1], tileY[1]); //
          break;
        case 14:
          drawTile(x, y, tileX[2], tileY[1]); // bricks
          break;
        case 15:
          drawTile(x, y, tileX[3], tileY[1]); // stairs
          break;
        case 16:
          ctx.drawImage(tileSetMapBank, tileX[4] + 0.5, tileY[1] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // mast middle
          break;
        case 17:
          drawTile(x, y, tileX[5], tileY[1]); //
          break;
        case 18:
          drawTile(x, y, tileX[6], tileY[1]); //
          break;
        case 19:
          drawTile(x, y, tileX[7], tileY[1]); //
          break;
        case 20:
          drawTile(x, y, tileX[8], tileY[1]); // pipe top left
          break;
        case 21:
          drawTile(x, y, tileX[9], tileY[1]); // pipe top right
          break;
        case 22:
          drawTile(x, y, tileX[10], tileY[1]); //
          break;
        case 23:
          drawTile(x, y, tileX[0], tileY[2]); //
          break;
        case 24:
          drawTile(x, y, tileX[1], tileY[2]); //
          break;
        case 25:
          ctx.drawImage(tileSetMapBank, tileX[2] + 0.5, tileY[2] + 0.5, 15, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush top
          break;
        case 26:
          ctx.drawImage(tileSetMapBank, tileX[3] + 0.5, tileY[2] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // pipe bottom left
          break;
        case 27:
          ctx.drawImage(tileSetMapBank, tileX[4], tileY[2] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // pipe bottom right
          break;
        case 28:
          drawTile(x, y, tileX[5], tileY[2]); //
          break;
        case 29:
          drawTile(x, y, tileX[6], tileY[2]); //
          break;
        case 30:
          drawTile(x, y, tileX[7], tileY[2]); //
          break;
        case 31:
          ctx.drawImage(tileSetMapBank, tileX[8] + 0.5, tileY[2] + 0.5, 15.6, 15.6, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush left
          break;
        case 32:
          ctx.drawImage(tileSetMapBank, tileX[9], tileY[2] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush middle
          break;
        case 33:
          ctx.drawImage(tileSetMapBank, tileX[10], tileY[2] + 0.5, 16, 16, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush right
          break;
        case 34:
          ctx.drawImage(tileSetMapBank, tileX[0], tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // sky close to bush
          break;
        case 35:
          ctx.drawImage(tileSetMapBank, tileX[1] - 0.5, tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush top middle
          break;
        case 36:
          drawTile(x, y, tileX[2], tileY[3]); //
          break;
        case 37:
          ctx.drawImage(tileSetMapBank, tileX[3] + 0.5, tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush middle
          break;
        case 38:
          ctx.drawImage(tileSetMapBank, tileX[4] - 0.5, tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush middle 2
          break;
        case 39:
          ctx.drawImage(tileSetMapBank, tileX[5] + 0.5, tileY[3], 16, 16, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush light green left
          break;
        case 40:
          drawTile(x, y, tileX[6], tileY[3]); //
          break;
        case 41:
          ctx.drawImage(tileSetMapBank, tileX[7] - 0.5, tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush light green right
          break;
        case 42:
          ctx.drawImage(tileSetMapBank, tileX[8], tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush light green right
          break;
        case 43:
          ctx.drawImage(tileSetMapBank, tileX[9], tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush dark green
          break;
        case 44:
          ctx.drawImage(tileSetMapBank, tileX[10], tileY[3] + 0.5, 16, 15, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush dark green
          break;
        case 45:
          ctx.drawImage(tileSetMapBank, tileX[0], tileY[4], 15, 16, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // bush dark green
          break;
        case 46:
          drawTile(x, y, tileX[1], tileY[4]); //
          break;
        case 47:
          drawTile(x, y, tileX[2], tileY[4]); // ground
          break;
        case 'questionMarkOFF':
          ctx.drawImage(tileSet, 432, 0, 16, 16, x * tileSize - mapOffsetX, y * tileSize, tileSize, tileSize); // brick block OFF - drawn on map when Mario hits question mark (change 12 to 'off' in map array)
          break;
      }
    }
  }
}
