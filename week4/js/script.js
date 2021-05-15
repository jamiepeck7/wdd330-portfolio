const name = document.querySelector('name');
const password = document.querySelector('password');
const confirm = document.querySelector('confirm_password');
const form = document.querySelector('form');
const errorElement = document.querySelector('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (this.name.value === '' || this.name.value == null ){
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

   //Check passwords using regular Javascript

//var check = function() {
    //if (document.getElementById('password').value ==
    //  document.getElementById('confirm_password').value) {
     // document.getElementById('message').style.color = 'green';
     // document.getElementById('message').innerHTML = 'matching';
   // } else {
   //   document.getElementById('message').style.color = 'red';
  //    document.getElementById('message').innerHTML = 'not matching';
   // }
 // }  

function onChange() {
   const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
   confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}
     