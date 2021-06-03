
const fill = document.querySelectorAll('.fill1');
const empties = document.querySelectorAll('.empty');
const filll = document.querySelectorAll('.fill2');
const fillll =document.querySelectorAll('.fill3');
const red =document.querySelectorAll('.fill4');
const white =document.querySelectorAll('.fill5');
const orange =document.querySelectorAll('.fill6');
const nine=document.querySelectorAll('.top');                                    
const reset = document.querySelector('.btn');                                
const tryagain1=document.querySelector('.button') ;
const pop=document.querySelector('.pop');                    //get all the variables
const close=document.querySelector('.close');
const score=document.getElementById('2');

let STR="";
let CMP="";                                     //global variables
let divs;
let time1=new Date();
let points=350;


start();            //randomise 3x3 grid colours
rnd();              //randomise 5x5 grid colours


 
reset.addEventListener('click',function(){                                    //buttonclick  reset
  start();   
  rnd(); 
  score.innerHTML = "Score :"
  time1 =new Date();                                   
});

tryagain1.addEventListener('click',function(){                                    //buttonclick tryagain
  start();   
  rnd();      
  pop.style.display='none';
  score.innerHTML = "Score :";
  time1 =new Date();                             
});

close.addEventListener('click',function(){                                    //buttonclick tryagain     
  pop.style.display='none';                             
});

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

  orange.forEach(elem =>{
        elem.addEventListener('dragstart', dragStart);
        elem.addEventListener('dragend', dragEnd5);
        });

  
//end of fill listnenrs



// Loop through empty boxes and add listeners
empties.forEach(elem =>{
  elem.addEventListener('dragover', dragOver);
  elem.addEventListener('dragenter', dragEnter);
  elem.addEventListener('dragleave', dragLeave);
  elem.addEventListener('drop', dragDrop);
});
//end of loop



// Drag Functions

function dragStart(theEvent) {

  theEvent.dataTransfer.setData("Text", theEvent.target.id);      //start
  this.className += " hold";
  
setTimeout(() => (this.className = 'none'), 0);


}

function dragEnd() {
console.clear();
this.className = 'fill1';                                      //{end
get();
compare();

}

function dragEnd1() {
  console.clear();
  this.className = 'fill2';
  get();
  compare();
}

function dragEnd2() {
  console.clear();
  this.className = 'fill3';
  get();
  compare();
}

function dragEnd3() {
  console.clear();
  this.className = 'fill4';
  get();
  compare();
}

function dragEnd4() {
  console.clear();
  this.className = 'fill5';                                     
  get();
  compare();
}

function dragEnd5() {
  console.clear();
  this.className = 'fill6';                                    
  get();
  compare();
}                                                              //end}


function dragOver(e) {                                         //over
  e.preventDefault();
}

function dragEnter(e) {                                        //enter
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {                                         //leave
  this.className = 'empty';
}


//drop function to append colors to blank

function dragDrop(theEvent)                 
{ 

  var id = theEvent.dataTransfer.getData("Text");  //get dragging elements id
  
  if(this.classList.contains("hovered"))           //condition to drop only on empty
  {  
  
  this.className = 'empty';             //convert empty hovered  to empty
  
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
        default:;
    }}
    
    if(id.startsWith("d"))                 //blue tiles drop
    switch(id[8])
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
        default:;
    }
    if(id.startsWith("r"))                 //red tiles drop
    switch(id[3])
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

    if(id.startsWith("o"))                 //white tiles drop
    switch(id[6])
    {
      case "1":
        this.append(orange[0]);
        break;
      case "2":
        this.append(orange[1]);
        break;
      case "3":
        this.append(orange[2]);
        break;
      case "4":
        this.append(orange[3]);
        break;
        default:;
    }
  }


}


function get()                              //to get 3x3 string
{ 

  let co;
  let temp="";

  for(let i=0,c=0,j=6;i<3;i++,j++,c++)        //console print 3x3 square
  {
    co=divs[j].querySelector(".fill1")

    if(co!=null)
    {
    
    STR += co.id;
    temp=STR.slice(0,-1);
    STR=temp;
   }

    else{
    co=divs[j].querySelector(".fill2")
    if(co!=null)
    {    
      STR += co.id;
      temp=STR.slice(0,-1);
      STR=temp;
      }
  

    else{
    co=divs[j].querySelector(".fill3")
    if(co!=null)
    {    
      STR += co.id;
      temp=STR.slice(0,-1);
      STR=temp;
      }

     else{
    co=divs[j].querySelector(".fill4")
    if(co!=null)
    {    
      STR += co.id;
      temp=STR.slice(0,-1);
      STR=temp;}

        else{
    co=divs[j].querySelector(".fill5")
    if(co!=null)
    {    
      STR += co.id;
      temp=STR.slice(0,-1);
      STR=temp;}

      else{
        co=divs[j].querySelector(".fill6")
        if(co!=null)
        {    
          STR += co.id;
          temp=STR.slice(0,-1);
          STR=temp;}
  
    else
    STR+="null";}}}
  }
  
  }


    if(i===2)
   {j=j+2;i=-1;}
    if(j==20)
    break;
  }
}


function start()                          //random color for 3x3
{ CMP="";
  nine.forEach(color =>{
    color.style.background =getrandomcolor();
  });
}

function getrandomcolor()                    //create random color
{
  let letters=["red","darkblue","yellow","white","green","orange"];
 let color= letters[Math.floor(Math.random()*letters.length)];
 CMP+=color;
  return color;
}


function compare()                         //compare the 3x3 grid
{
if(STR.localeCompare(CMP)===0)
{console.log("same");
pop.style.display="flex";
time2=new Date();
let total=(time2-time1)/1000;
if(total<350)
score.innerHTML += String(Math.floor(points-total));      
else
score.innerHTML += String(10);                //append score to display
}
else
console.log("different");
STR="";
}

function rnd(){                           //randomise colour for 5x5 grid
var parent = document.getElementById("p1");
divs = parent.children;
var frag = document.createDocumentFragment();
while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
}
parent.appendChild(frag);                                                        
}


