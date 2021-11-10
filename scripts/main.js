// Create desired grid size in 500x500 container by inputting in number into function
const outerContainer = document.querySelector('#outer-container');

function createGrid(num) {
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');
  innerContainer.style.display = 'flex';
  innerContainer.style.flexWrap = 'wrap';
  

  for (let rows = 0; rows < num; rows++) {
    for (let columns = 0; columns < num; columns++) {
      const aBox = document.createElement('div');
      aBox.classList.add('box');
      //gridContainer.append(box);
      innerContainer.append(aBox);

      aBox.style.width = `${500 / num}px`;
      aBox.style.height = `${500 / num}px`;
    }
  }
outerContainer.append(innerContainer);
}
createGrid(25);



const slider = document.getElementById('slider');
slider.addEventListener('click', function(e) {
  const removeInner = document.querySelector('.inner-container');
  removeInner.remove();
  createGrid(e.target.value);

  const gridSize = document.getElementById('slide-size');
  gridSize.textContent = `${e.target.value} x ${e.target.value}`;

});












// Set default pen color effect to black
const box = document.querySelectorAll(".box");
box.forEach((boxSq) => {
  boxSq.addEventListener('mouseenter', function() {
    boxSq.style.backgroundColor = "#000000";
  });
});

// Let browser know that 'Pen Color' button clicked and set pen color to color input
const penColor = document.getElementById('pen-color-input');

penColor.addEventListener("input", updateColor, false /* 'false' doesn't seem necessary here?? */);


// Sets pen color to selected color for pen effect
function updateColor(event) {
  const boxColor = document.querySelectorAll(".box");

  // 'this' refers to 'penColor' variable here 
  if (this) {
    //console.log(!!penColor);
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = event.target.value;
      });
    });
  }
}

// Let browser know that 'Rainbow' button clicked and set pen color to random colors generated by setRainbow function
const penRainbow = document.getElementById('rainbow');
penRainbow.addEventListener('click', setRainbow, false /* 'false' doesn't seem necessary here?? */);
function setRainbow() {
  const boxColor = document.querySelectorAll(".box");

  // 'this' refers to 'penRainbow' variable here 
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = getRandomColor();
        //getRandomColor;
        //console.log(box.style.backgroundColor);
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

// Set color to white when mouse over grid boxes to create eraser effect
const penEraser = document.getElementById('eraser');
penEraser.addEventListener('click', setEraser, false);
function setEraser() {
  const boxColor = document.querySelectorAll(".box");
  if (this) {
    boxColor.forEach((box) => {
      box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = "#FFFFFF";
      });
    });
  }
}















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