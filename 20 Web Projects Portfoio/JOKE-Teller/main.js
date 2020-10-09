

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton(){
    button.disabled=!button.disabled;
}
// VoiceRSS Speech Function
function tellMe(joke) {
  // VoiceRSS Speech Parameters
//Api pour obtenir le son et la languee
  VoiceRSS.speech({
    key: 	'64fa6bfa9d7f470b82f77aec03d61159',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}
//Passing Joke to Voice RSS API

//Get jokes from joke API
//joke C'est setup et delivery property
async function getJokes(){
   let joke="";
    const apiUrl='https://sv443.net/jokeapi/v2/joke/Dark';
    try{
     const response=await fetch(apiUrl);
     const data=await response.json();
      if(data.setup){
          joke=`${data.setup} ...${data.delivery}`;
      }
      else{
          joke=data.joke;
      }
      //Text to speech
     tellMe(joke);
     toggleButton();
     //tell me function pour le son 

     
    }
    catch(error){
        //catch errors here 
        console.log("Whoops".error);
    }
}
//Event Listeners
button.addEventListener("click",getJokes);
audioElement.addEventListener('ended',toggleButton);