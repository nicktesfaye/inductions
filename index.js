
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
const score=document.getElementById('002');
const grey=document.querySelector('.blank');

let STR="";                   //5x5 string
let CMP="";                   //3x3 string             
let divs;                     //empty elements in array order
let time1=new Date();         //count time
let points=350;               //max points
let count=0;                  //count moves
let par;                      //empty object from which coclor dragged
let index;                    //element of divs that is blank
let abc;                      //the dragged element
let num;                      //blank box  as a element of divs array
let divsindex;                //parent of dragged element as a element of divs array
let term=0;                   //find legality of move
let z=1;


var parent = document.getElementById("p1");
divs = parent.children;


start();            //randomise 3x3 grid colours
rnd();              //randomise 5x5 grid colours
getindex();         //index of blank in the start

 
reset.addEventListener('click',function(){                                    //buttonclick  reset
  start();   
  rnd(); 
  z=1;
  score.innerHTML = "Score :"
  time1 =new Date();
  count=0;                                   
});

tryagain1.addEventListener('click',function(){                                    //buttonclick tryagain
  start();   
  rnd();    
  z=1;  
  pop.style.display='none';
  score.innerHTML = "Score :";
  time1 =new Date(); 
  count=0;                            
});

close.addEventListener('click',function(){                                    //buttonclick tryagain     
  pop.style.display='none'; 
  z=0;                         
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

function dragStart() {    //start
  this.className += " hold";
  par=this.parentElement;
  abc=this;
setTimeout(() => (this.className = 'none'), 0);


}

function dragEnd() {
//console.clear();
this.className = 'fill1';                                      //{end
get();
compare();

}

function dragEnd1() {
  //console.clear();
  this.className = 'fill2';
  get();
  compare();
}

function dragEnd2() {
  //console.clear();
  this.className = 'fill3';
  get();
  compare();
}

function dragEnd3() {
  //console.clear();
  this.className = 'fill4';
  get();
  compare();
}

function dragEnd4() {
  //console.clear();
  this.className = 'fill5';                                     
  get();
  compare();
}

function dragEnd5() {
  //console.clear();
  this.className = 'fill6';                                    
  get();
  compare();
  
}                                                              //end}


function dragOver(e) {                                         //over
  e.preventDefault();
}

function dragEnter(e) {                                        //enter
  e.preventDefault();
  if(this.children[0].id.startsWith("z"))
  this.className += ' hovered';
}

function dragLeave() {                                         //leave
  this.className = 'empty';
}


//drop function to append colors to blank

function dragDrop()                 
{ 
  var idd=this.children[0].id;
  var id = abc.id;  //get dragging elements id

  for(let i=0;i<divs.length;i++)
  {
    if(abc.parentElement.id===divs[i].id)
    divsindex=i;
    
  }

  let numb=parseInt(num);
  let divsindex1=parseInt(divsindex);
  console.log(numb);
  console.log(divsindex1);

  

    if(numb===0)
    {if(divsindex1===1 || divsindex1===5)
    term=1;}

    else if(numb===4)
    {if(divsindex1===3 || divsindex1===9)
    term=1;}

    else if(numb===20)
    {if(divsindex1===15 || divsindex1===21)
    term=1;}

    else if(numb===24)
    {if(divsindex1===23 || divsindex1===19)
    term=1;}

    else if(numb===1 || numb===2 || numb=== 3)
    {if(divsindex1=numb+5 || divsindex1===numb+1 || divsindex1===numb-1)
    term=1;}

    else if(numb===5 || numb===10 || numb=== 15)
    {if(divsindex1=numb+5 || divsindex1===numb+1 || divsindex1===numb-5)
    term=1;}

    else if(numb===21 || numb===22 || numb=== 23)
    {if(divsindex1=numb-1 || divsindex1===numb+1 || divsindex1===numb-5)
    term=1;}

    else if(numb===9 || numb===14 || numb=== 19)
    {if(divsindex1=numb+5 || divsindex1===numb-1 || divsindex1===numb-5)
    term=1;}

    else
    {if(divsindex===numb+5 || divsindex===numb-5 || divsindex===numb+1 || divsindex===numb-1)
    term=1;}

  

 console.log(term);
  if(term===1)
  if(idd.startsWith("z"))           //condition to drop only on empty
  {  
    
  this.className = 'empty';             //convert empty hovered  to empty
    if(id.startsWith("y"))                //yellow tiles drop
   { 
     switch(id[6])
    {
      case "1":
        this.append(filll[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(filll[1]);
        par.append(grey);
        count++;
        break;
        case "3":
          this.append(filll[2]);
          par.append(grey);
          count++;
          break;
        case "4":
          this.append(filll[3]);
          par.append(grey);
          count++;
          break;
        default:;
    }}
    
    if(id.startsWith("d"))                 //blue tiles drop
    switch(id[8])
    {
      case "1":
        this.append(fill[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(fill[1]);
        par.append(grey);
        count++;
        break;
      case "3":
          this.append(fill[2]);
          par.append(grey);
          count++;
          break;
      case "4":
          this.append(fill[3]);
          par.append(grey);
          count++;
          break;
          default:;
    }

    if(id.startsWith("g"))                 //green tiles drop
    switch(id[5])
    {
      case "1":
        this.append(fillll[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(fillll[1]);
        par.append(grey);
        count++;
        break;
      case "3":
          this.append(fillll[2]);
          par.append(grey);
          count++;
          break;
      case "4":
          this.append(fillll[3]);
          par.append(grey);
          count++;
          break;
        default:;
    }
    if(id.startsWith("r"))                 //red tiles drop
    switch(id[3])
    {
      case "1":
        this.append(red[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(red[1]);
        par.append(grey);
        count++;
        break;
      case "3":
        this.append(red[2]);
        par.append(grey);
        count++;
        break;
      case "4":
          this.append(red[3]);
          par.append(grey);
          count++;
          break;
        default:;
    }

    if(id.startsWith("w"))                 //white tiles drop
    switch(id[5])
    {
      case "1":
        this.append(white[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(white[1]);
        par.append(grey);
        count++;
        break;
      case "3":
        this.append(white[2]);
        par.append(grey);
        count++;
        break;
      case "4":
        this.append(white[3]);
        par.append(grey);
        count++;
        break;
        default:;
    }

    if(id.startsWith("o"))                 //white tiles drop
    switch(id[6])
    {
      case "1":
        this.append(orange[0]);
        par.append(grey);
        count++;
        break;
      case "2":
        this.append(orange[1]);
        par.append(grey);
        count++;
        break;
      case "3":
        this.append(orange[2]);
        par.append(grey);
        count++;
        break;
      case "4":
        this.append(orange[3]);
        par.append(grey);
        count++;
        break;
        default:;
    }
  }

  getindex();
  term=0; 
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
total=points-total-(2*count);
if(z===1)
{if(total>10)
score.innerHTML += String(Math.floor(total));      
else
score.innerHTML += String(10);                //append score to display
}}
else
console.log("different");
STR="";
}

function rnd(){                           //randomise colour for 5x5 grid

var frag = document.createDocumentFragment();
while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
}
parent.appendChild(frag); 
                                                    
}


function getindex()
{
  for(let i=0;i<divs.length;i++){
    if(divs[i].children[0].id==='zz')
    {//console.log(divs[i]);
      index=divs[i];
      num=i;
    }
  }
}

//function draggable(){

  
//}
