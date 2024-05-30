let color = "black";

function populateContainer(size) {
    let container = document.querySelector(".container");
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.classList.add("cell");
        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);
    }
}

populateContainer(16); // Initial 16x16 grid

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateContainer(input);
    } else {
        console.log("Input error! Number of squares must be between 2 and 100.");
    }
}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetContainer() {
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll(".cell");
    squares.forEach((square) => {
        square.style.backgroundColor = "#e0e0e0";
    });
}
