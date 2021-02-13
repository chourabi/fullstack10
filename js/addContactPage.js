
var addContactForm = document.getElementById("add-contact-form");

var inputTitre = document.getElementById("id-titre");
var inputPhone = document.getElementById("id-phone");


function saveContact( value ){
    

    if (localStorage.getItem('contacts') == null ) {
        var contacts = value;
        localStorage.setItem('contacts',contacts);
    }else{
        var contacts = localStorage.getItem('contacts');
        contacts+='#';
        contacts+=value;

        localStorage.setItem('contacts',contacts);
    }


}

addContactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    var contact = {
        titre : inputTitre.value,
        phone : inputPhone.value
    }

    var contactTEXT = JSON.stringify(contact)

    saveContact(contactTEXT);

})

/**********************************************************************/


