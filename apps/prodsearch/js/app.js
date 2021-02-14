var prodList = document.getElementById("prod-list");
var searchBar = document.getElementById("search-bar");


var produit = [
    'annans',
    'bannas',
    'apples',
    'orange',
    'kiwi',
    'berries'
]

var filtredProduit = produit;


function initProdList(){
    var prodsBloc='';

    filtredProduit.map((p)=>{
        prodsBloc+='<li>'+p+'</li>';
    })
    prodList.innerHTML= prodsBloc ;
}


initProdList();


searchBar.addEventListener('keyup',(e)=>{
    const v = e.target.value;
    filtredProduit = produit.filter((p)=>{
        return ( p.indexOf(v) != -1 )
    })

    initProdList();
})