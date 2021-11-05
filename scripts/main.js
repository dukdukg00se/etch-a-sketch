const container = document.querySelector('#grid-container');




function createGrid(num) {
  for (let rows = 0; rows < num; rows++) {
    for (let columns = 0; columns < num; columns++) {
      const box = document.createElement('div');
      box.classList.add('box');
      container.append(box);

      box.style.width = `${500 / num}px`;
      box.style.height = `${500 / num}px`;
    
      console.log(box.style.width);
    }
  }

}







createGrid(8);