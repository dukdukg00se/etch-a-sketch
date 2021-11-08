// Creates the desired grid size in 500x500 container by inputting in number into function
const gridContainer = document.querySelector('#grid-container');
function createGrid(num) {
  for (let rows = 0; rows < num; rows++) {
    for (let columns = 0; columns < num; columns++) {
      const box = document.createElement('div');
      box.classList.add('box');
      gridContainer.append(box);

      box.style.width = `${500 / num}px`;
      box.style.height = `${500 / num}px`;
    }
  }
}
createGrid(50);

// Sets the default pen color effect to black
const box = document.querySelectorAll(".box");
box.forEach((boxSq) => {
  boxSq.addEventListener('mouseover', function() {
    boxSq.style.backgroundColor = "#000000";
  });
});

// Let browser know that the 'Pen Color' button was clicked and to set the pen color to color input
const penColor = document.getElementById('pen-color-input');
penColor.addEventListener("input", updateColor, false);

// Function sets the pen color to selected color for the pen effect
function updateColor(event) {
  const boxColor = document.querySelectorAll(".box");

  if (this) /* 'this' refers to 'penColor' variable here */{
    boxColor.forEach((box) => {
      box.addEventListener('mouseover', function() {
        box.style.backgroundColor = event.target.value;
      });
    });
  }
}

/* This returns event.target.value, originally used to try to get the value of color input by adding the function into the penColor event listener and setting backgroundColor to the value but this didn't work

function getValue(event) {
  console.log(event.target.value);
  return event.target.value;
}
*/