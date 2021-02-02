
//Ya seychas izuchayu react no u menya netu dostatochno opita na nyom ya postoralsya vipolnit zadachu ispolzuya HTML CSS JAVASCRIPT
//SPASIBO!

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const snameInput = document.querySelector('#sname');
const date = document.querySelector('#date');
const select = document.querySelector('#select');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(snameInput.value);
    console.log(date.value);
    console.log(select.value)
}