

var express=require("express");

var router=express.Router();

var connection=require("../lib/db");


// router.get("/opquast",(req,res)=>
// {
  
// // FIXME res=> c'est la reponse de la http 
// res.render("opquast")
// });




   router.get("/",(req,res)=>{

//views direct c'est l'affichage  je devrais ecris le fichier que je veux afficher dans views 
    connection.query("SELECT * FROM opquast ORDER BY id desc",(err,rows)=>{
             res.render("opquast",{data:rows});
                            
         

                                   
    
    });

});


/* -------------------------------------------------------------------------- */
/* --------------------------- Rajouter--------------------------------------- */
/* -------------------------------------------------------------------------- */
//FIXME 
//TODO 
//SECTION
//ANCHOR //=> ca cest la route pour acceder la page add
// ca le nom de la route 
//render va aller chercher le fichier corrrespondant


//FIXME router.get("/jeveuxafficherpageadd",(req,res,next)=>
// {
//     res.render("opquast/add",{
//         titre:"",
//         description:""
    
//     })
// })
//Cest juste un route il accepte n'importe quel nom 
router.get("/add",(req,res,)=>
{                                                                //!!http://localhost:3111/add
    res.render("opquast/add",{
        titre:"",
        description:""
    
    })
})

router.post("/add",(req,res)=>{

//TODO req.body.titre =>require la valeur de la titre dans le input    contient name=titre comme en php $_POST 

    let titre=req.body.titre;
    let description=req.body.description;


    var form_data={
        titre:titre,
        description:description
    }


   connection.query("INSERT INTO opquast SET ?",form_data,(err,result)=>
    {
           res.redirect("/");
         
      })
 })



/* -------------------------------------------------------------------------- */
/*                             //!!DELETE DANGER                              */
/* -------------------------------------------------------------------------- */



 router.get("/delete/(:id)",function(req,res){

    let id=req.params.id;
    

    connection.query("DELETE FROM opquast WHERE id="+id,function(err,result)
    {
           
        res.redirect("/")
    });

});


/* -------------------------------------------------------------------------- */
/*                                   //?Update                                */
/* -------------------------------------------------------------------------- */

// router.get("/edit",(req,res,next)=>
// {
//     res.render("opquast/edit",{
//         titre:"",
//         description:"",
//         id:"",
//     })
// })

//TODO ATTETION AU COMMENTAIRE car il prend compte <=titre>
// on recupere chaque ligne dans la base de donne 
// here we get the data at the base de donne 

router.get("/edit/(:id)",function(req,res,next){


    let id=req.params.id;
    
    
    
    connection.query("SELECT * FROM opquast WHERE id=" +id,function(err,rows,fields){
        
    

            //render to edit.ejs 
             res.render("opquast/edit",{
              
                 id:rows[0].id,
                 titre:rows[0].titre,
                 description:rows[0].description
             })
        
    })
    })
    
    
    
    
    // update opquast data 
    
    
    router.post("/update/:id",(req,res,next)=>{
    
    let id=req.params.id;
    let titre=req.body.titre;
    let description=req.body.description;

        var form_data={
            titre:titre,
            description:description
        }
    
        connection.query("UPDATE opquast SET ? WHERE id="+ id,form_data,(err,result)=>
        {

            res.redirect("/");
        
    
    })

    })
    
module.exports=router;
