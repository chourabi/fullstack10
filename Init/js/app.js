/*var x,y,z;
x = 20 ;
while (x > 0) {
    var res = confirm('voulez vous -10, if not -5 ?');
    

    if (res) {
        //x = x -10;
        x-=10;
    
        console.log("new value of x =",x);
    }else{
        x-=5;
    
        console.log("new value of x =",x);
    }
}

console.log("fin de traitment x = ",x);*/


/*** interactiong with html file ***/


/***  add two input values  * */

/*

function addTowNumbers(a, b) {
    return (a + b);
}

function calculer() {
    var value1;
    var value2;

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    value1 = parseInt(input1.value);
    value2 = parseInt(input2.value);
    var result = document.getElementById("result");
    var somme = addTowNumbers(value1, value2);

    if (isNaN(somme)) {
        result.innerHTML = "error";
    } else {
        result.innerHTML = somme;
    }

}

var btn = document.getElementById("addbtn");

var clickevent = btn.addEventListener('click', () => {
    calculer();
});*/


/**
 *
 *
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

input1.addEventListener('focus',()=>{
    console.log("i'm in input 1");
})

input2.addEventListener('focus',()=>{
    console.log("i'm in input 2");
})


 */


 /** moyen  * */

/*
 var matieres = [1,20,3,4,50,6,7,80,9,-1];


 matieres.push(8);
 console.log(matieres);

 matieres.pop();
 console.log(matieres);

 matieres.shift();
 console.log(matieres);

 var re = matieres.splice(2,2);
 console.log(matieres,re);


 
 var re = matieres.splice( matieres.indexOf(80) ,1);
 console.log(matieres);

 matieres.sort((a, b) => a - b);
 console.log(matieres);

 matieres.reverse();
 console.log(matieres);


 var nElement = [];

 matieres.map( (e)=>{
     const ne = e+1;
        nElement.push(ne);
 } )
 
 var filtredArray = matieres.filter((e)=>{
     return (e < 8);
 })

 console.log(filtredArray);
 var x = [[1,2],[1,2,3,4],[1,2]]

 console.log(x);


 */


 var personne = {

    nom : "taher",

    prenom : "chourabi",

    phone : 93863732,

    job : null,

    id : 11223366,

    address : {
        ville : "tunis",
        code:2000,
        street : "somewhere"
    },

    voitures : [
        {
            mark : "ford",
            matricul : "1212TU1212"
        },
        {
            mark : "RANGEROVER",
            matricul : "1212TU1212"
        },
        
    ]

 }


 var personnes = []

 /** */
 var indexOfFeildAboutToUpdate;
 /**/ 

function initPeronnesTable(){
    var rows = '';

    personnes.map((p)=>{
       
       var row =' <tr>';
          row+='<td>'+ p.id +'</td>';
          row+='<td>'+ p.nom +'</td>';
          row+='<td>'+ p.prenom +'</td>';
          row+='<td> <button  onclick="  initUpdate('+p.num+')  "  >UPDATE</button> <button  onclick="  deleteRow('+p.num+')  "  >DELETE</button> </td>';
          
          row +='</tr>';
   
          rows+=row;
   
    })
   
    document.getElementById("tbodyPerssone").innerHTML = rows;
}



 var addPersonneButton = document.getElementById("addBtn");
 var idInput = document.getElementById("id-value");
 var nomInput = document.getElementById("nom-value");
 var prenomIput = document.getElementById("prenom-value");
/** input update */
 var idInputUpdate = document.getElementById("id-value-update");
 var nomInputUpdate = document.getElementById("nom-value-update");
 var prenomIputUpdate = document.getElementById("prenom-value-update");


 

 function testValues(id,nom,prenom){

    if (id == "" ) {
        return false;
    }else{
        if (nom == "") {
            return false;
        }else{
            if (prenom == "") {
                return false
            }
        }
    }

     return true;
 }
 


 addPersonneButton.addEventListener('click',()=>{
     var vid = idInput.value;
     var vnom = nomInput.value;
     var vprenom = prenomIput.value;



    if (testValues(vid.trim() ,vnom.trim() ,vprenom.trim() )) {
        var length = personnes.length;
        length ++;
        var personne = {
            nom : vnom.trim(),
            id:vid.trim(),
            prenom:vprenom.trim(),
            num : length
        }
   
   
        personnes.push(personne);
        idInput.value=null;
        nomInput.value="";
        prenomIput.value="";

        initPeronnesTable();

        console.log(personnes);
    }else{
        alert("missing feild !!");
    }

 })

 function deleteRow(num){

    if (confirm('do your really wanna delete this item ?')) {
        personnes.splice( (num-1) ,1 )
        initPeronnesTable();
        
    }
 }


 function initUpdate(num){
    idInputUpdate.value = personnes[num-1].id;
    nomInputUpdate.value = personnes[num-1].nom;
    prenomIputUpdate.value = personnes[num-1].prenom;

    indexOfFeildAboutToUpdate = (num-1);
     

 }

 var updateBtn = document.getElementById("updateBtn");

 updateBtn.addEventListener('click',()=>{
    var vid = idInputUpdate.value;
    var vnom = nomInputUpdate.value;
    var vprenom = prenomIputUpdate.value;

    personnes[indexOfFeildAboutToUpdate].id = vid;
    personnes[indexOfFeildAboutToUpdate].nom = vnom;
    personnes[indexOfFeildAboutToUpdate].prenom = vprenom;

    initPeronnesTable();
     
 })


 

 

 

 