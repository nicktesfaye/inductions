const fill = document.querySelectorAll('.fill1');
const empties = document.querySelectorAll('.empty');
const filll = document.querySelectorAll('.fill2');
const fillll =document.querySelectorAll('.fill3');
const red =document.querySelectorAll('.fill4');
const white =document.querySelectorAll('.fill5');

var parent = document.getElementById("p1");
var divs = parent.children;
var frag = document.createDocumentFragment();
while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
}
parent.appendChild(frag);



 //Fill listeners

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
  this.className += " hold";
  
setTimeout(() => (this.className = 'none'), 0);


}

function dragEnd() {

this.className = 'fill1';
check();

}

function dragEnd1() {
  this.className = 'fill2';
  check();
}

function dragEnd2() {
  this.className = 'fill3';
  check();
}

function dragEnd3() {
  this.className = 'fill4';
  check();
}

function dragEnd4() {
  this.className = 'fill5';
  check();
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

  var id = theEvent.dataTransfer.getData("Text");
  if(this.classList.contains("hovered"))
  
  {  
  this.className = 'empty';
  
  if(id.startsWith("y"))                //yellow tiles drop
   { 
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
    }}
    
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

let co;


function check()
{ console.clear();
  for(let i=0,c=0,j=6;i<3;i++,j++,c++)        //console print 3x3 square
  {
    co=divs[j].querySelector(".fill1")

    if(co!=null)
    console.log(co);

    else{
    co=divs[j].querySelector(".fill2")
    if(co!=null)
    console.log(co);
  

    else{
    co=divs[j].querySelector(".fill3")
    if(co!=null)
    console.log(co);
      else{
    co=divs[j].querySelector(".fill4")
    if(co!=null)
    console.log(co);
        else{
    co=divs[j].querySelector(".fill5")
    if(co!=null)
    console.log(co);
  
    else
    console.log("null");}}}}


    if(i===2)
   {j=j+2;i=-1;}
    if(j==20)
    break;
  }
  
}
