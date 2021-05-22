document.addEventListener('deviceready', loadContacts,false);

function loadContacts(){
    let options = new ContactFindOptions();
    options.filter = "esp";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ['*'];
    navigator.contacts.find(fields, handleContacts, handleError, options);
}

function handleContacts(contacts){
    let listContacts = '';
    for(let i=0; i<contacts.length;i++){
        listContacts += `
        <li contact.id="${Contacts[i].id}">
        <a href="Contact-show">
            <img src="img/image.png" width="20%" >
            <h1>${contacts[i].name.formatted}</h1>
            <p>${contacts[i].hasPhoneNumber.value}</p>
        </a>
    </li>`
    }
    contactList.innerHTML += listContacts;
    $('li').click(function(){
        getContact(
            ($this).attr('contact-id'));
    })
    $(contactList).listview('refresh');
}

function handleError(error){
    console.log("erreur dans la récuperation des contacts ...");
    console.log(error);
}

function handleContactError(error){
    console.log("erreur dans la récuperation des contacts ...");
    console.log(error);
}

function getContact(id){
    let options = new ContactFindOptions();
    options.filter = id
    options.multiple = false;
    let fields = ['id'];

    navigator.contacts.find(fields, handleContact, handleContactError, options);

}

function handleContact(){
   
    if(contacts.length != 0){
        let  contact = contacts[0];
        contactName.innerHTML = contact.name.formatted;
        contactNumber.innerHTML =contact.phoneNumber[0].value;
    }
    else
    {
        console.log("contact non trouvé");
    }

}