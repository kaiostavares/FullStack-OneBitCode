function show(){
    //ELemento
    const contacList = document.getElementById('contact-list')
    console.log(contacList)

    //HTML Collections
    const listELements = document.getElementsByTagName('li')
    console.log(listELements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    //Nodes Lists
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //Elemento
    const firstContact = document.querySelector('#contact-list >li > label')
    console.log(firstContact)
}
