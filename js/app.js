// CODE EXPLAINED channel
//select the elements
const clear = document.querySelector(".cleare");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


//grgggsdgsdgsd



//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
//variables
let LIST= []
    ,  id = 0
    ,  iD =0;
//show todays dataElement
const options = {weekday : "long",month:"long",day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us", options);
//add to do functi on
//show current timeout
function currentTime(){
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("timer").innerHTML = hour + " : " + min + " : "+ sec;
let t = setTimeout(function(){currentTime()}, 1000);
}
//appending zero before each digit
function updateTime(k){
  if (k<10){
         return "0" + k;

  }
  else{
    return k;
  }
}

currentTime();
//select color picker

function addToDo(toDo,id,iD, done, trash,pencil){

  if(trash){ return;}
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ?LINE_THROUGH :"";
    const item = `<li class="item">
  <i class="fa ${DONE} co" job ="complete" id="${id}"></i>
    <p class="text $LINE">${toDo}</p>
    <i class="fa fa-trash-o de" job ="delete"id="${id}"></i>
    <i class="fa fa-pencil-square-o" job ="edit"id="${iD}"></i>
   </li>
  `;

  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}


var cols = {
  "r":"#FF0000",
  "b":"#0000FF",
  "p":"#FF00FF"
} // no comma after the last
window.onload=function() { // when the page loads
  var rads = document.getElementsByName("music"); // all rads named music
  for (var i=0;i<rads.length;i++) {
    rads[i].onclick=function() {
      document.body.style.backgroundColor=cols[this.value];
    }
  }
}


 //add an item to the list when the user presses the enter key
 document.addEventListener("keyup",function(even){
   if (event.keyCode == 13){
     const toDo = input.value;
     //if the input isn't empty
      if(toDo){
       addToDo(toDo);
        LIST.push({
          name : toDo?
          id : id,
          iD : iD,
          done : false,
          trash : false
        });
        id++;
        iD++;
     }
     input.value = " ";

   }
 }
);
//complete to do {
  function completeToDo(element){
    element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        LIST[element.id].done = LIST[element.id].done? false:true;

  }
//remove to do {
function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash=true;
}
function editToDo(element){
    element.parentNode.parentNode.addChild(element.parentNode);


}
//target the items created dynamically
list.addEventListener("click",function(event){
  const element = event.target;//returns the clicked element in teh LIST
  const elementJob = element.attributes.job.value;//complete or delete

  if(elementJob == "complete"){
    completeToDo(element);
  }
  else if (elementJob == "delete") {
    removeToDo(element);
  }
  else if (elementJob=="edit") {
    editToDo(element);

  }
});
