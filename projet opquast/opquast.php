<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROJET OPQUAST 2020</title>
</head>
<body>
<header>
    <h1>WELCOME TO YOUR APPLICATION</h1>
</header>


<section>


<button  class="getglossary">GET INFO</button>



<div class="infosglossary"></div>

</section>




<script>

 var getinfo=document.querySelector(".getglossary");

 getinfo.addEventListener("click",function(){

 
  


             
     fetch("data/practice.php")

    .then((res)=>res.json())
        
       
    .then((data)=>{

    


    


             

      

    
    
     const gloss=Math.floor(Math.random()*data.length);


  
  
       console.log(data[gloss]);
  

    var output = `
        <article>
          <h3>${data[gloss].title}</h3>
      
           <p>${data[gloss].phases}</p>
           <p>${data[gloss].objectives}</p>
          </article>
      `;

    document.querySelector(".infosglossary").innerHTML+=output;


})
 });
  


  
 ;
</script>

    
</body>
</html>