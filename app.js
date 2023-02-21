// number of squares per side

const inputEl = document.querySelector("input");
const gridContainerEl = document.querySelector("#grid-container");
const formEl = document.querySelector("form");

let numberOfSquaresPerSide = 16;
// grid-template-columns: repeat(16, 1fr);

createGrid(numberOfSquaresPerSide);

function createGrid(numberOfSquaresPerSide) {
  gridContainerEl.style.gridTemplateColumns = `repeat(${numberOfSquaresPerSide}, 1fr)`;
  console.log(gridContainerEl.style);
  for (let boxY = 0; boxY < numberOfSquaresPerSide; boxY++) {
    for (let boxX = 0; boxX < numberOfSquaresPerSide; boxX++) {
      const div = document.createElement("div");
      div.classList.add("box");
      gridContainerEl.appendChild(div);
    }
  }

  let boxEl = document.querySelectorAll(".box");

  boxEl.forEach((box) => {
    // box.style.width = `${500 / numberOfSquaresPerSide}px`;
    box.style.height = `${500 / numberOfSquaresPerSide}px`;
  });

  boxEl.forEach((box) => box.addEventListener("mouseover", fillBox));
}

function fillBox(e) {
  e.target.style.backgroundColor = `rgba(0, 0, 0, 0.${9})`;
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

formEl.addEventListener("submit", (e) => {
  gridContainerEl.innerHTML = "";

  numberOfSquaresPerSide = Number.parseFloat(inputEl.value);

  if (numberOfSquaresPerSide >= 1 && numberOfSquaresPerSide <= 100) {
    createGrid(numberOfSquaresPerSide);
  } else {
    gridContainerEl.innerHTML = "Invalid Entry";
  }

  e.preventDefault();
});
