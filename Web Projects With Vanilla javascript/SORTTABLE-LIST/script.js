const draggable_list=document.getElementById("draggable-list");
const check=document.getElementById("check");


    const richestPeople = [
  
    'Bill Gates',
    'Jeff Bezos',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
      ];



//Store ListsItems
const listItems=[];

let dragStartIndex;

createList();

//Insert list items into Dom 

const numbers=[33,34,2,41,13,1];

numbers.sort(MyF);
    
function MyF(a,b){

return a-b;

}




function createList()
{

[...richestPeople]


.map(a=>({value: a,sort: Math.random()}))
.sort((a,b)=>a.sort-b.sort)
.map(a=>a.value)
.forEach((person,index)=>{

 const listItem=document.createElement("li");
 listItem.setAttribute("data-index",index);


 listItem.innerHTML=
 `<span class="number">${index+1}</span>
 <div class="draggable"  draggable="true">
 <p class="person-name">${person}</p>
 <i class="fas fa-group-lists"></i>
</div>`;

listItems.push(listItem);


draggable_list.appendChild(listItem);
});

addEventListeners();
}
function dragStart(){
    // console.log("Event","dragstart");
   dragStartIndex=+this.closest("li").getAttribute('data-index');
   console.log(dragStartIndex);

   
 }
function dragEnter(){
    //console.log("Event","dragenter");
    this.classList.add("over");
}
function dragLeave(){
    this.classList.remove("over");
   // console.log("Event","dragover");
}

function dragOver(e){
    e.preventDefault();
    //console.log("Event","dragover");
}

function dragDrop(){
   // console.log("Event","drop");
   const dragEndIndex=+this.getAttribute('data-index');
   swapItems(dragStartIndex,dragEndIndex);
   this.classList.remove("over");
  
}

//Swap list items that are drag and drop
function swapItems(fromIndex,toIndex){
    const itemOne=listItems[fromIndex].querySelector(".draggable");
    const itemTwo=listItems[toIndex].querySelector(".draggable");
      
    console.log(itemOne);

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}


function addEventListeners(){
    const draggables=document.querySelectorAll(".draggable");
    const dragListItems=document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',dragStart);
    })

    dragListItems.forEach(item=>{
        item.addEventListener("dragover",dragOver);
        item.addEventListener("drop",dragDrop);
        item.addEventListener("dragenter",dragEnter);
        item.addEventListener("dragleave",dragLeave);

    });
}


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

//check the order of list items 
function checkOrder(){
    listItems.forEach((listItem,index)=>{
        const personName=listItem.querySelector(".draggable").textContent.trim();
        //FIXME personName C'est la balise <p> qui est la seul contient Text
        if(personName!==richestPeople[index]){
            console.log(personName);
            listItem.classList.add("wrong");
        }
        else
        {  listItem.classList.remove("wrong");
            listItem.classList.add('right');
        }
    });
}
check.addEventListener('click',checkOrder);