
// literals
let direction: "north" | "south" | "east" | "west"
// direction can only be set to these values
direction = "east"
// direction = "fire" will give an error

let res_code: 200 | 302 | 404
res_code = 200 //any other value not in literal will give an error

// single literals
let res_status: "ok"

// Enums
// numeric
enum Size {
    Small,
    Medium,
    Large
} // just like literals but are assigned to a variable
// Size.Large

// so rewriting the direction literal to enum would look like:
enum Direction {
    North,
    South,
    East,
    West
}


// so now we can right
let cardPoint: Direction = Direction.East
//  ir even set it to index
let cardPoint2: Direction = 0 

// string
enum DirPad {
    Up = "UP",
    Down = "DOWN",
    Left = 'LEFT',
    Right = "RIGHT"
}

// enums are a way to group variables
