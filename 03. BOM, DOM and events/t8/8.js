const input1 = document.querySelector('#num1')
const input2 = document.querySelector('#num2')

const target = document.getElementById("result");
const button = document.getElementById("start");

button.addEventListener('click', function (evt) {
    var x = document.getElementById("operation").value;
    if (x === "add") {
        let result = parseInt(input1.value) + parseInt(input2.value);
        target.innerHTML = result;
    }
    else if (x === "sub") {
        let result =  parseInt(input1.value) - parseInt(input2.value);
        target.innerHTML = result;
    }
    else if (x === "multi") {
        let result = parseInt(input1.value) * parseInt(input2.value);
        target.innerHTML = result;
    }
    else if (x === "div") {
        let result = parseInt(input1.value) / parseInt(input2.value);
        target.innerHTML = result;
    }
});

