// creating types other than objects or non object based types

// function compareCoords(p1: [number, number], p2: [number, number]): [number, number] {
//     return [p1[0], p2[1]]
// }

type Coordinate = [number, number]

function compareCoords(p1: Coordinate, p2: Coordinate): Coordinate {
    return [p1[0], p2[1]]
}

// and we can define something like
const coords2: Coordinate[] = []

// we cannnot implement or extend types
