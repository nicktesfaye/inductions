const fill = document.querySelectorAll('.fill1');
const empties = document.querySelectorAll('.empty');
const filll = document.querySelectorAll('.fill2');

// Fill listeners
fill.forEach(elem =>{
elem.addEventListener('dragstart', dragStart);
elem.addEventListener('dragend', dragEnd);
});

filll.forEach(elem =>{
elem.addEventListener('dragstart', dragStart);
elem.addEventListener('dragend', dragEnd1);
});




// Loop through empty boxes and add listeners
empties.forEach(elem =>{
  elem.addEventListener('dragover', dragOver);
  elem.addEventListener('dragenter', dragEnter);
  elem.addEventListener('dragleave', dragLeave);
  elem.addEventListener('drop', dragDrop);
});
 

// Drag Functions

function dragStart(theEvent) {
  theEvent.dataTransfer.setData("Text", theEvent.target.id);
  this.className += ' hold';
setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnd() {
  this.className = 'fill1';
}

function dragEnd1() {
  this.className = 'fill2';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}


function dragDrop(theEvent) 
{
  if(this.className==="empty hovered")
  {
  var id = theEvent.dataTransfer.getData("Text");
  this.className = 'empty';
  
  if(id.startsWith("y"))                //yellow tiles drop
    switch(id[6])
    {
      case "1":
        this.append(filll[0]);
        break;
      case "2":
        this.append(filll[1]);
        break;
        case "3":
          this.append(filll[2]);
          break;
        default:;
    }
    
    if(id.startsWith("p"))                 //purple tiles drop
    switch(id[6])
    {
      case "1":
        this.append(fill[0]);
        break;
      case "2":
        this.append(fill[1]);
        break;
        case "3":
          this.append(fill[2]);
          break;
        default:;
    }
  }
}
