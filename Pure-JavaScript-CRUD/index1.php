

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud Application en javascript</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<table>

<tr>
    <td>

       <form autocomplete="off" onsubmit="event.preventDefault();onFormSubmit();">
           <label for="prenom" >Prenom:</label>
           <input type="text" name="prenom" id="prenom">

           <label for="metier">Metier</label>
           <input type="text" name="metier" id="metier">

           <label for="salaire">Salaire</label>
           <input type="text" name="salaire"id="salaire">

           <label for="Address">Address</label>
           <input type="text" name="address" id="address">

           <button type="submit">Envoyer</button>
       </form>
    </td>

    <td>
        <table class="lists" id="employers">
         <thead>
             <tr>
                 <th>Prenom</th>
                 <th>Metier</th>
                 <th>Salaire</th>
                 <th>Address</th>
             </tr>
         </thead>
         <tbody>

         </tbody>
        </table>
    </td>
</tr>
</table>

<script>
var selectedRow = null

function onFormSubmit() {


       
    var formData=readFormData();
   
      if(selectedRow==null)
      insertNewRecord(formData);
           else
           {
               update(formData);
           }
           resetForm();
      }


function readFormData(){

    var formData={};

formData["prenom"]=document.getElementById("prenom").value;
formData["metier"]=document.getElementById("metier").value;
formData["salaire"]=document.getElementById('salaire').value;
formData["address"]=document.getElementById("address").value;

return formData;
}


function insertNewRecord(data)
{

    //insertRow()Method permet d'insérer nouveau ligne 
    //rajoute une balise <tr> </tr>
    // la methode insert Row cree un element tr vide et l'ajoute à une table 
    // !! Remarque un element tr doit contenir
    //* */ un ou plusierus element th ou td 
    //TODO 

    //insertCell() Mehtod inserts a cell into the current row

    var table=document.getElementById("employers").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    
    console.log(table);
    value1=newRow.insertCell(0);
    value1.innerHTML=data.prenom;

    value2=newRow.insertCell(1);
    value2.innerHTML=data.metier;

    value3=newRow.insertCell(2);
    value3.innerHTML=data.salaire;

    value4=newRow.insertCell(3);
    value4.innerHTML=data.address;
    value4=newRow.insertCell(4)
    value4.innerHTML=`<a onClick="Edit(this)">Edit</a>
                      <a onClick="deleted(this)">Delete</a>`;
}

function resetForm(){

    document.getElementById("prenom").value="";
    document.getElementById("metier").value="";
    document.getElementById("salaire").value="";
    document.getElementById("address").value="";
selectedRow=null;}


function Edit(td){

    selectedRow=td.parentElement.parentElement;
    document.getElementById("prenom").value=selectedRow.cells[0].innerHTML;
    document.getElementById("metier").value=selectedRow.cells[1].innerHTML;
    document.getElementById("salaire").value=selectedRow.cells[2].innerHTML;
    document.getElementById("address").value=selectedRow.cells[3].innerHTML;

}

function update(formData)
{
    selectedRow.cells[0].innerHTML=formData.prenom;
    selectedRow.cells[1].innerHTML=formData.metier;
    selectedRow.cells[2].innerHTML=formData.salaire;
    selectedRow.cells[3].innerHTML=formData.address;
}

function deleted(td)
{
    if(confirm("Etes-vous Sûr de vouloir supprimer")){

        row=td.parentElement.parentElement;

        document.getElementById('employers').deleteRow(row.rowIndex);

        //rowIndex propriété return Ligne or rowIndex 
        //row==Ligne
        

        resetForm();
    }

}


</script>


    
</body>
</html>