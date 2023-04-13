console.log('iftekher mahmud pervez')

mahmud = document.querySelector('.mahmud')
input = document.querySelector('input[type=text]')
btn = document.querySelector('button')

btn.onclick = () => {

    if (!input.value == "") {
        iftekher = document.createElement('li')

        iftekher.innerHTML = input.value;

        mahmud.appendChild(iftekher)
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
        text = document.querySelector('h3')
        text.innerHTML = "enter the valiate text";
        text.style.color = 'red';
    }
}


