console.log('iftekher mahmud pervez')

mahmud = document.querySelector('.mahmud')
text = document.querySelector('h3')
input = document.querySelector('input[type=text]')
btn = document.querySelector('button')

btn.onclick = (e) => {
    e.preventDefault()
    if (!input.value == "") {

        listgroup = document.createElement('li')
        listgroup.className = 'listgroup';


        note=document.createElement('h4')
        note.innerHTML = input.value;


        delbtn=document.createElement('button')
        delbtn.innerHTML="Delete";


        listgroup.appendChild(note)
        listgroup.appendChild(delbtn)


        mahmud.appendChild(listgroup)
        setTimeout(() => {
            input.value = '';
            text.style.color = 'green';
            text.innerHTML = "text submit successfully";

        }, 100);
        setTimeout(() => {
            text.innerHTML = "add some note on it";
            text.style.color = 'black';

        }, 3000);
    }
    else {
        
        text.innerHTML = "enter the valiate text";
        text.style.color = 'red';
    }
}



listitem=document.querySelectorAll('.listgroup');


listitem.forEach(listitems => {
    listitems.children[1].onclick=(e) => {
        todo = e.target.parentElement;
        todo.remove();
        listitems.style.display="none";
    }
});
