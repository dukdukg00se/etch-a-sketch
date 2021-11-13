let currentPenColor = '#000000';
let currentBkgrndColor = "#FFFFFF";
let rainbowMode = false;
let eraserMode = false;

// Create desired grid size in 500x500 container; default is set at 25x25
const outerContainer = document.querySelector('#outer-container');

function createGrid(num) {
  // Create an inner container to add boxes to which can be removed when resizing grid
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');
  
  for (let rows = 0; rows < num; rows++) {
    for (let columns = 0; columns < num; columns++) {
      const aBox = document.createElement('div');
      aBox.classList.add('box');

      aBox.classList.add('gridLines');
      aBox.classList.add('empty'); // For background change button; to toggle

      innerContainer.append(aBox);

      aBox.style.width = `${500 / num}px`;
      aBox.style.height = `${500 / num}px`;
    }
  }
outerContainer.append(innerContainer);

}
// Default grid size
createGrid(25);

console.log(slider.value);
const slider = document.getElementById('slider');



slider.addEventListener('click', function(e) {
  const removeInner = document.querySelector('.inner-container');
  removeInner.remove();
  createGrid(e.target.value);

  const box = document.querySelectorAll('.box');
  box.forEach((boxSq) => {
    boxSq.style.backgroundColor = currentBkgrndColor;
    boxSq.classList.add('empty'); 
    boxSq.addEventListener('mouseenter', function() {
      if (rainbowMode) {
        boxSq.style.backgroundColor = getRandomColor();
      } else if (eraserMode) {
        boxSq.style.backgroundColor = currentBkgrndColor;
      } else {
        boxSq.style.backgroundColor = currentPenColor;
      }
      boxSq.classList.remove('empty'); 
    });
  });

  // Update slider size 
  //const gridSize = document.getElementById('slider-size');
  //gridSize.textContent = `Grid Size: ${e.target.value} x ${e.target.value}`;
});

// Update slider size 
const gridSize = document.getElementById('slider-size');
slider.addEventListener('mousemove', function(e) {
  gridSize.textContent = `Grid Size: ${e.target.value} x ${e.target.value}`;
})



function checkMode() {
  if (rainbowMode) {
    penRainbow.style.cssText = "background-color: black; color: white";
  } else if (!rainbowMode) {
    penRainbow.style.cssText = "background-color: rgb(239, 239, 239); color: black";
  }

  if (eraserMode) {
    penEraser.style.cssText = "background-color: black; color: white";
  } else if (!eraserMode) {
    penEraser.style.cssText = "background-color: rgb(239, 239, 239); color: black";
  }
}

// Set default pen color effect to black
const box = document.querySelectorAll(".box");
box.forEach((boxSq) => {
  boxSq.addEventListener('mouseenter', function() {
    boxSq.style.backgroundColor = currentPenColor;
    
    //boxSq.classList.toggle('empty'); (Doesn't work, everytime mouse over it toggles class)

    boxSq.classList.remove('empty');
  });
});


const pen = document.getElementById('pen-color');
pen.addEventListener('click', function() {
  rainbowMode = false;
  eraserMode = false;
  checkMode();


  const boxColor = document.querySelectorAll(".box");
  boxColor.forEach((box) => {
    box.addEventListener('mouseenter', function () {
      box.style.backgroundColor = currentPenColor;
      box.classList.remove('empty'); 
    });
  });
});


// Let browser know that pen color swatch clicked and set pen color to color input
const penColorInput = document.getElementById('pen-color-input');
penColorInput.addEventListener("input", updateColor, false /* 'false' doesn't seem necessary here?? */);

// Sets pen color to selected color for pen effect
function updateColor(event) {
  rainbowMode = false;
  eraserMode = false;

  const boxColor = document.querySelectorAll(".box");
  // 'this' refers to 'penColor' variable here 
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        currentPenColor = event.target.value;
        box.style.backgroundColor = currentPenColor;
        box.classList.remove('empty'); 
      });
    });
  }
}


const bkgrndColor = document.getElementById('bkgrnd-color-input');
bkgrndColor.addEventListener('input', updateBkgrnd, false);

function updateBkgrnd(event) {
  const bkgrnd = document.querySelectorAll('.empty');
  bkgrnd.forEach((box) => {
    currentBkgrndColor = event.target.value;
    box.style.backgroundColor = currentBkgrndColor;
  });

  const box = document.querySelectorAll('.box');
  box.forEach((boxSq) => {
    boxSq.addEventListener('mouseenter', function() {
      boxSq.style.backgroundColor = currentPenColor;
      boxSq.classList.remove('empty'); 
    });
  });
}


// Let browser know that 'Rainbow' button clicked and set pen color to random colors generated by setRainbow function
const penRainbow = document.getElementById('rainbow');
penRainbow.addEventListener('click', setRainbow, false /* 'false' doesn't seem necessary here?? */);
function setRainbow() {
  rainbowMode = true;
  eraserMode = false;
  checkMode();

  const boxColor = document.querySelectorAll(".box");
  // 'this' refers to 'penRainbow' variable here 
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        //currentPenColor = getRandomColor();
        //box.style.backgroundColor = currentPenColor;

        box.style.backgroundColor = getRandomColor();
        box.classList.remove('empty'); 

      });
    });
  }
}

// Random color generator
function getRandomColor() {
  
  // Another option is "#" + Math.floor(Math.random()*16777215).toString(16) 
  // Or `rgb(${Math.floor(Math.random() * 256), ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256))`
  // Below returns fewer, but more colorful, colors
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// ERASER: Set color to white when mouse over grid boxes to create eraser effect
const penEraser = document.getElementById('eraser');
penEraser.addEventListener('click', setEraser, false);
function setEraser() {
  rainbowMode = false;
  eraserMode = true;
  checkMode();

  const boxColor = document.querySelectorAll(".box");
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = currentBkgrndColor;
        box.classList.add('empty'); 
      });
    }); 
  }
}

// CLEAR GRID
const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
  const box = document.querySelectorAll('.box');
  box.forEach((boxSq) => {
    boxSq.style.backgroundColor = currentBkgrndColor;
    boxSq.classList.add('empty'); 
    boxSq.addEventListener('mouseenter', function() {
      if (rainbowMode) {
        boxSq.style.backgroundColor = getRandomColor();
      } else if (eraserMode) {
        boxSq.style.backgroundColor = currentBkgrndColor;
      } else {
        boxSq.style.backgroundColor = currentPenColor;
      }
      boxSq.classList.remove('empty'); 
    });
  });
});

// TOGGLE GRID LINES
const gridToggle = document.getElementById('grid-lines');
gridToggle.addEventListener('click', function () {
  const box = document.querySelectorAll('.box');
  box.forEach((boxSq) => {
    boxSq.classList.toggle('gridLines');
  });
})








/* The following was written to try to figure out the shade and lighten functionalities; will revisit later
const penShade = document.getElementById('shade');
penShade.addEventListener('click', shade, false ('false' doesn't seem necessary here??));

function shade() {
  const boxColor = document.querySelectorAll(".box");
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function(e) {
        let oldColor = e.target.style.backgroundColor;
        
        // oldColor values seems to be given in rgb but if give rgba values can use code below to check 
         //let rgbaString = (oldColor.charAt(3) == 'a') ? oldColor.slice(5, -1) : oldColor.slice(4, -1);
        
        //let rgbString = oldColor.slice(4, -1);
        //let rgbArray = rgbString.split(',');
        
        let rgbArray = oldColor.slice(4, -1).split(',');
        console.log(rgbArray);
        let red = rgbArray[0];
        let green = rgbArray[1];
        let blue = rgbArray[2];
        let alpha = rgbArray[3] ? rgbArray[3] : 1;

        console.log(!!rgbArray[3]);
        let currentDarkeningStep = e.target.dataset.darken;
        if(currentDarkeningStep == 9) return [0, 0, 0, 1]; //cell is already black
        console.log([red, green, blue, alpha]);
        console.log('Current darkening step: ' + currentDarkeningStep);
      });
    });
  }
*/


/* This returns event.target.value, originally used to try to get the value of color input by adding the function into the penColor event listener and setting backgroundColor to the value but this didn't work
function getValue(event) {
  console.log(event.target.value);
  return event.target.value;
}
*/