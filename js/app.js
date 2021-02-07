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



 

 

 

 