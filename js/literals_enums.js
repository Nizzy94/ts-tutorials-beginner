"use strict";
// literals
let direction;
// direction can only be set to these values
direction = "east";
// direction = "fire" will give an error
let res_code;
res_code = 200; //any other value not in literal will give an error
// single literals
let res_status;
// Enums
// numeric
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {})); // just like literals but are assigned to a variable
// Size.Large
// so rewriting the direction literal to enum would look like:
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
// so now we can right
let cardPoint = Direction.East;
//  ir even set it to index
let cardPoint2 = 0;
// string
var DirPad;
(function (DirPad) {
    DirPad["Up"] = "UP";
    DirPad["Down"] = "DOWN";
    DirPad["Left"] = "LEFT";
    DirPad["Right"] = "RIGHT";
})(DirPad || (DirPad = {}));
// enums are a way to group variables
