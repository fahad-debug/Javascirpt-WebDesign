
const cardsContainer=document.getElementById("cards-container");


const currentEl=document.getElementById("current");
const questionEl=document.getElementById("question");//INPUT QUESTION
const answerEl=document.getElementById("answer");//INPUT ANSWER
const clearBtn=document.getElementById("clear");
const addContainer=document.getElementById("add-container");


//Keep track of current card

let currentActiveCard=0;

// Store DOM cards 

const cardsEl=[];

//Store card data 

const cardsData=getCardsData();



//!!Function
//Show Number of cards 
function updateCurrentText(){
    currentEl.innerHTML=`${currentActiveCard + 1}/${cardsEl.length}`;
    //current class cardsEl.length=== C'est le longeur d'objet
}
//!!Function
//GET CARDS FROM LOCAL STORAGE
function getCardsData(){
    const cards=JSON.parse(localStorage.getItem("cards"));
    return cards===null ? [] :cards;
}

//!!Function 
//Add card to local Storage 
function setCardsData(cards){
    localStorage.setItem("cards",JSON.stringify(cards));
    window.location.reload();
}



//TODO Button Next
const nextBtn=document.getElementById("next");
nextBtn.addEventListener("click",()=>{
    cardsEl[currentActiveCard].className="card left";
    //the difference between className and classList

    currentActiveCard=currentActiveCard +1;

        if(currentActiveCard > cardsEl.length-1){
            currentActiveCard=cardsEl.length-1;
        }

        cardsEl[currentActiveCard].classList="card active";
        updateCurrentText();
}); 
//TODO Button PrevBtn
const prevBtn=document.getElementById("prev");
prevBtn.addEventListener("click",()=>{
cardsEl[currentActiveCard].className="card right";
 currentActiveCard=currentActiveCard - 1;
     if(currentActiveCard < 0){
            currentActiveCard=0;
        }

        cardsEl[currentActiveCard].classList="card active";
        updateCurrentText();
}); 

//SHOW And Hide ADD CONTAINER 
const btnAddNewCard=document.getElementById("show");
 btnAddNewCard.addEventListener("click",()=>addContainer.classList.add("show"));
const CloseBtnX=document.getElementById("hide");
CloseBtnX.addEventListener("click",()=>addContainer.classList.remove("show"));


//Add new Card
const addCardBtn=document.getElementById("add-card");
addCardBtn.addEventListener("click",addCard);
     


   function addCard()
{
    const question=questionEl.value;
    const answer=answerEl.value;
    console.log(question,answer);

    if(question.trim() && answer.trim()){
        const newCard={question:question,answer:answer};


        //createCard(newCard);
        
       //LES 2 INPUTS  quesitonEl et answerEl dans le Dom
        questionEl.value="";
        answerEl.value="";
      
        addContainer.classList.remove("show");
        //then we hide AddContainer
        //cardsData ==function getCardData above
        //newCard===les 2 valeurs des 2 input 
        //cardsData===les 2 valuers des 2 input
        // en lui affectant par push new Card
        cardsData.push(newCard);
        setCardsData(cardsData);
        console.log(newCard);//FIXME  C'est un objet qui contient 2 proprietes
    }
}
cardsData.forEach(function(data,index)
{
    createCard(data,index);
});

console.log(cardsData);//FIXME C'est un objet qui contient 2 proprietes

function createCard(data,index)
{


const card=document.createElement("div");
card.classList.add("card");
//on a crée une div et on lui affecte class card si
// il y des question on rajoute class active ou superieur

if(index===0){
    card.classList.add("active");
}

card.innerHTML=`<div class="inner-card">
<div class="inner-card-front">
    <p>
        ${data.question}
    </p>
</div>
<div class="inner-card-back">
    <p>
       ${data.answer}
    </p>
</div>
</div>`;

//Add to DOM cards

card.addEventListener("click",()=>card.classList.toggle("show-answer"));

cardsEl.push(card);
console.log(card);//??C'est le div qu on a cree 

//cardsEl Array vide card C'est un objet on va construire le dom
//append Child card 
cardsContainer.appendChild(card);
//cardsContainer le parent div qui n'est pas commenté 
updateCurrentText();
}
///Clear cards button

clearBtn.addEventListener("click",()=>{
    localStorage.clear();
    cardsContainer.innerHTML="";
    window.location.reload();
});