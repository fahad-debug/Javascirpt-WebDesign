// a cleaner way asy


const main=document.getElementById("main");
const addUserBtn=document.getElementById("add-user");
const doubleBtn=document.getElementById("double");
const showMillionairesBtn=document.getElementById("show-millionaires");
const sortBtn=document.getElementById("sort");
const calculateWealthBtn=document.getElementById("calculate-wealth");


let data=[];

// Fetch random user and add money

getRandomUser();
getRandomUser();
getRandomUser();
  async function getRandomUser(){

   const res =await fetch("https://randomuser.me/api")
   const datas=await res.json();
  
   const user=datas.results[0];
   //console.log(data.results[0]);
   //un peu bizzare cette objet 
   //array[0]=name{first:}

   const newUser={
       name:`${user.name.first} ${user.name.last}`,
       money:Math.floor(Math.random()*100000)
   };

addData(newUser);

}

// Double everyones money

function doubleMoney(){


    data=data.map((user)=>{

     console.log({money:user.money*2, name:user.name+"FoFo"});
    
        return{...user,money:user.money*2};
        
     
    });
    
  
    updateDOM();
}


//Sort users by richest

//Calculate The Total Wealth 
function calculateWealth(){

    const wealth=data.reduce((acc,user)=>(acc+=user.money),0);

    const wealthEl=document.createElement("div");
    wealthEl.innerHTML=`<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function sortByRichest(){
    data.sort((a,b) => b.money=a.money);

    updateDOM();
}

function showMillionaires()
{

    data=data.filter(user=>user.money>1000000);
    updateDOM();

}


function addData(obj){
    data.push(obj);
    //data=[] array en haut 
    //console.log(data);
    updateDOM();

}

function updateDOM(providedData=data){

//clear main div 

main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';

providedData.forEach(item =>{

    const element=document.createElement("div");
    element.classList.add("person");
    element.innerHTML=`<strong>${item.name}</strong>
    ${formatMoney(item.money)}`;
    main.appendChild(element);
    //console.log(element)
})
}


//Format number as money 

function formatMoney(number)
{
    return "$"+ number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67

}

//Event Listeners

addUserBtn.addEventListener("click",getRandomUser);
doubleBtn.addEventListener("click",doubleMoney);
sortBtn.addEventListener("click",sortByRichest);
showMillionairesBtn.addEventListener("click",showMillionaires);
calculateWealthBtn.addEventListener("click",calculateWealth);

