// number of squares per side

const inputEl = document.querySelector("input");
const gridContainerEl = document.querySelector("#grid-container");
const formEl = document.querySelector("form");
const randomBtn = document.querySelector("#random");
let randomFillColor = false;

let numberOfSquaresPerSide = 16;
// grid-template-columns: repeat(16, 1fr);

createGrid(numberOfSquaresPerSide);

function createGrid(numberOfSquaresPerSide) {
  gridContainerEl.style.gridTemplateColumns = `repeat(${numberOfSquaresPerSide}, 1fr)`;
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
  console.log();
  if (randomFillColor) {
    e.target.style.backgroundColor = randomColor();
  } else {
    // Pencil effect implementation HOOORAAY!
    if (e.target.style.backgroundColor) {
      let opacityValue = e.target.style.backgroundColor.slice(-2, -1);
      if (+opacityValue < 9) {
        e.target.style.backgroundColor = `rgba(0,0,0,0.${+opacityValue + 1})`;
      } else {
        e.target.style.backgroundColor = "black";
      }
    } else {
      e.target.style.backgroundColor = `rgba(0,0,0, 0.1)`;
    }
  }
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

randomBtn.addEventListener("click", () => {
  if (randomFillColor) {
    randomFillColor = false;
    randomBtn.textContent = "Turn on random";
  } else {
    randomFillColor = true;
    randomBtn.textContent = "Turn off random";
  }
});
