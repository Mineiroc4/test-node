function findBestSpot(landWidth, landHeight, exploitationWidth, exploitationHeight, goldMines) {
  function buildMatrix(landWidth, landHeight, goldMines) {
    let board = [];

    for(let x = 0; x < landHeight; x++) {
        let lineBoard = [];
        for(let y = 0; y < landWidth; y++) {
            const indexOfMatch = goldMines.find(c => c.x === x && c.y === y);
            const fill = !indexOfMatch ? 0 : 1;
            lineBoard.push(fill);
        }
        board.push(lineBoard);
    }

    return board;
}

function findBestSpot(landWidth, landHeight, exploitationWidth, exploitationHeight, goldMines) {

    let board = buildMatrix(landWidth, landHeight, goldMines);

    console.log(board);

    let countGoldMines = 0;
    let finalCoordinates = {x: undefined, y: undefined};

    for (let x = 0; x < landHeight - exploitationHeight + 1; x++) {
        for (let y = 0; y < landWidth - exploitationWidth + 1; y++) {
            let innerCount = 0;
            for (let ex = 0; ex < exploitationHeight; ex++) {
                for (let ey = 0; ey < exploitationWidth; ey++) {
                    innerCount += board[x + ex][y + ey];
                }
            }
            if (innerCount > countGoldMines) {
                countGoldMines = innerCount;
                finalCoordinates.x = x;
                finalCoordinates.y = y;
            }
        }
    }

    return {
        coordinates: { ...finalCoordinates },
        goldMines : countGoldMines
    }
}

let result = findBestSpot(6, 4, 2, 2, [{x: 1, y: 0}, {x: 5, y: 0}, {x:2, y:2}, {x:3,y:3}]);
console.log(result);
  return {
    coordinates: {
      x: 0,
      y: 0,
    },
    goldMines : 0
  }
}
findBestSpot(6,4,2,2,[{x:1,y:0},{x:5,y:0}, {x:2,y:2},{x:3,y:3}])
module.exports = findBestSpot;