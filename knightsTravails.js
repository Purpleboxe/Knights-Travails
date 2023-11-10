class Board {
    createNode(position, path) {
        if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
            return null;
        }

        return { position, path };
    }

    knightMoves([x, y], [a, b]) {
        let n = [this.createNode([x, y], [[x, y]])];
        let current = n.shift();

        while (current.position[0] !== a || current.position[1] !== b) {
            let moves = [
                [current.position[0] + 1, current.position[1] + 2],
                [current.position[0] + 1, current.position[1] - 2],
                [current.position[0] - 1, current.position[1] + 2],
                [current.position[0] - 1, current.position[1] - 2],
                [current.position[0] + 2, current.position[1] + 1],
                [current.position[0] + 2, current.position[1] - 1],
                [current.position[0] - 2, current.position[1] + 1],
                [current.position[0] - 2, current.position[1] - 1],
            ];

            moves.forEach((move) => {
                let node = this.createNode(move, current.path.concat([move]));
                if (node) {
                    n.push(node);
                }
            });

            current = n.shift();
        }

        console.log('=> ' + 'You made it in ' + (current.path.length - 1) + ' moves! ' + "Here's your path:");

        current.path.forEach((position) => {
            console.log(position);
        });
    }
}

let board = new Board();
board.knightMoves([5, 2], [3, 2]);

// This is what it prints out

/*  => You made it in 2 moves! Here's your path:
    [ 5, 2 ]
    [ 4, 4 ]
    [ 3, 2 ]
*/