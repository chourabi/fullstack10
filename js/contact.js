function checkSession(){
    if (localStorage.getItem('user')==null) {
        alert("session expired");
        window.location="auth.html";
    }
}


checkSession();


function initContactList(){
    var contactTEXTJSON = localStorage.getItem('contacts');
    var contactsArrayTextJson = contactTEXTJSON.split('#');

    var contactList = document.getElementById("contact-list");



    var list ="";

    contactsArrayTextJson.forEach( contact => {
        const parsedContact = JSON.parse(contact);

        console.log(parsedContact);

        var element = '<li class="list-group-item"><p><strong>'+parsedContact.titre+'</strong><br><small>+216 '+ parsedContact.phone +'</small></p></li>';

        list+=element;
    });

    contactList.innerHTML=list;
    
}




initContactList();



var body = document.getElementById("my-app-body");

body.style.backgroundColor="black";
