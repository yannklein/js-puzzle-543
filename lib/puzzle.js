// //////////
// Rehearsal
// //////////

// 1. Select the button and the hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click
button.addEventListener("click", (event) => {
  // 3. Display the hint
  hint.classList.add("active");
});

// //////////
// Livecode
// //////////

//Select all tiles
const cells = document.querySelectorAll("td");
//For each tile, listen for a click

const isEmpty = (liz) => {
  // find cellindex and rowindex of our tile
  const cellIndex = liz.cellIndex;
  const rowIndex = liz.parentElement.rowIndex;
  // cellindex and rowindex of empty tile
  const emptyTile = document.querySelector(".empty");
  const emptyCellIndex = emptyTile.cellIndex;
  const emptyRowIndex = emptyTile.parentElement.rowIndex;
  // compare the tiles
  // return (cellIndex - emptyCellIndex === 0 || rowIndex - emptyRowIndex === 0);
  return ((Math.abs(cellIndex - emptyCellIndex) + Math.abs(rowIndex - emptyRowIndex)) === 1)
};

const move = (tile) => {
  const emptyTile = document.querySelector(".empty");
  emptyTile.innerText = tile.innerText;
  emptyTile.classList.remove("empty");
  tile.classList.add("empty");
  tile.innerText = "";
};

const didWeWin = (tiles) => {
  const combination = [];
  tiles.forEach((tile) => {
    combination.push(tile.innerText)
  });
  const combiString = combination.join()
  console.log(combiString);
  return combiString === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    //check if there is an empty tile next to it
    const thisTile = event.currentTarget;
    if (isEmpty(thisTile)) {
      //add empty class, swap tiles
      move(thisTile);
      //check if won
      if (didWeWin(cells)) {
        alert("We wooooooon!");
      }
    }
  });
});


