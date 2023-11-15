document.getElementById('source').addEventListener('submit', function(evt) {
    event.preventDefault();

    let firstName = document.querySelector('#source [name="firstname"]').value;
    let lastName = document.querySelector('#source [name="lastname"]').value;

    document.getElementById('target').innerHTML = 'Your name is ' + firstName + ' ' + lastName;
})