const fill = document.querySelectorAll('.fill1');
const empties = document.querySelectorAll('.empty');
const filll = document.querySelectorAll('.fill2');
const fillll =document.querySelectorAll('.fill3');
const red =document.querySelectorAll('.fill4');
const white =document.querySelectorAll('.fill5');
let ARR=document.querySelectorAll('.empty');

var parent = document.getElementById("p1");
var divs = parent.children;
var frag = document.createDocumentFragment();
while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
}
parent.appendChild(frag);
console.log(parent);



// Fill listeners

fill.forEach(elem =>{
elem.addEventListener('dragstart', dragStart);
elem.addEventListener('dragend', dragEnd);
});

filll.forEach(elem =>{
elem.addEventListener('dragstart', dragStart);
elem.addEventListener('dragend', dragEnd1);
});

fillll.forEach(elem =>{
  elem.addEventListener('dragstart', dragStart);
  elem.addEventListener('dragend', dragEnd2);
  });

  red.forEach(elem =>{
    elem.addEventListener('dragstart', dragStart);
    elem.addEventListener('dragend', dragEnd3);
    });
  white.forEach(elem =>{
      elem.addEventListener('dragstart', dragStart);
      elem.addEventListener('dragend', dragEnd4);
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

function dragEnd2() {
  this.className = 'fill3';
}

function dragEnd3() {
  this.className = 'fill4';
}

function dragEnd4() {
  this.className = 'fill5';
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
        case "4":
          this.append(filll[3]);
          break;
        case "5":
           this.append(filll[4]);
           break;
        default:;
    }
    
    if(id.startsWith("b"))                 //blue tiles drop
    switch(id[4])
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
      case "4":
          this.append(fill[3]);
          break;
      case "5":
          this.append(fill[4]);
          break;
          default:;
    }

    if(id.startsWith("g"))                 //green tiles drop
    switch(id[5])
    {
      case "1":
        this.append(fillll[0]);
        break;
      case "2":
        this.append(fillll[1]);
        break;
      case "3":
          this.append(fillll[2]);
          break;
      case "4":
          this.append(fillll[3]);
          break;
      case "5":
          this.append(fillll[4]);
          break;
        default:;
    }
    if(id.startsWith("r"))                 //red tiles drop
    switch(id[4])
    {
      case "1":
        this.append(red[0]);
        break;
      case "2":
        this.append(red[1]);
        break;
      case "3":
        this.append(red[2]);
        break;
      case "4":
          this.append(red[3]);
          break;
      case "5":
          this.append(red[4]);
          break;
        default:;
    }

    if(id.startsWith("w"))                 //white tiles drop
    switch(id[5])
    {
      case "1":
        this.append(white[0]);
        break;
      case "2":
        this.append(white[1]);
        break;
      case "3":
        this.append(white[2]);
        break;
      case "4":
          this.append(white[3]);
          break;
        default:;
    }
  }


}
