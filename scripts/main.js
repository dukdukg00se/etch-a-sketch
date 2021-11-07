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
createGrid(4);


/*
const penColor = document.getElementById('pen-color-input');
penColor.addEventListener('input', (e) => {
  //const boxColor = document.querySelector('.box');
  //boxColor.style.cssText = ''
  
  console.log(e.target);
})

const penColor = document.getElementById('pen-color-input');
console.log(penColor.value);
*/


const penColor = document.getElementById('pen-color-input');
penColor.addEventListener("input", updateFirst, false);
//penColor.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll(".color-pick-buttons").forEach(function(cpb) {
    cpb.style.color = event.target.value;
  });
}


function updateFirst(event) {
  const boxColor = document.querySelectorAll('.box');
  console.log(event.target.value);
  
  if (penColor) {
    boxColor.forEach(function(box) {
      box.style.backgroundColor = event.target.value;
    })
  }
  /*
  if (penColor) {
    boxColor.style.backgroundColor = event.target.value;
  }
  */
}
/*
function updateAll(event) {
  document.querySelectorAll(".box").forEach(function(box) {
    box.style.backgroundColor = event.target.value;
  });
}
*/

