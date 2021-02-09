// //////////
// Rehearsal
// //////////

// 1. Select the button and the hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click
button.addEventListener("click", () => {
  // 3. Display the hint
  hint.classList.add("active");
});

// //////////
// Livecode
// //////////

// 1. Select all the tiles (and the empty?)
const tiles = document.querySelectorAll("td");

// 2. For each tile,
tiles.forEach((tile) => {
  // 3. Listen to click
  tile.addEventListener("click", (event) => {
    // 4. If empty tile is around,
    if (isEmpty(event.currentTarget)) {
      // 5. Swap the tile and the empty space
      swapTile(event.currentTarget);
      // 6. Check if you won!
      if(didWeWin(tiles)) {
        alert("We won!");
      }
    }
  });
});

const didWeWin = (tiles) => {
  // initialize counter
  // tiles.forEach((tile) => {
    // look at the inside of the tile
    // check if it's equal to a counter
    // if not return false, if yes continue
    // increment counter
    // manage the empty tile case
  // });
  // return true
  const tileNumbers = [];
  tiles.forEach((tile) => {
    tileNumbers.push(tile.innerText);
  });
  // console.log(tileNumbers.join());
  const expected = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  return (tileNumbers.join() === expected);
}

const swapTile = (currentTile) => {
  const empty = document.querySelector(".empty");
  empty.innerText = currentTile.innerText;
  empty.classList.remove("empty");
  currentTile.innerText = "";
  currentTile.classList.add("empty");
}

const isEmpty = (currentTile) => {
  // 1. current tile location (rX, cY)
  const rowX = currentTile.parentElement.rowIndex;
  const cellY = currentTile.cellIndex;
  // 2. find empty tiles location (rc)
  const empty = document.querySelector(".empty");
  const rowE = empty.parentElement.rowIndex;
  const cellE = empty.cellIndex;
  // If rX,c(Y+1) or rX,c(Y-1) or r(X-1),cY or r(x+1),cY are empty
  return ((rowX === rowE) && (cellY + 1 === cellE)
    || (rowX === rowE) && (cellY - 1 === cellE)
    || (rowX + 1 === rowE) && (cellY === cellE)
    || (rowX - 1 === rowE) && (cellY === cellE));
}


