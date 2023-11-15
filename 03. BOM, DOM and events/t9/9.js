document.getElementById("start").addEventListener("click", function () {
    const input = document.getElementById("calculation").value;

    if (input.includes("+")) {
        const [num1, num2] = input.split("+");
        const result = parseInt(num1) + parseInt(num2);
        document.getElementById("result").innerHTML = result;
    } else if (input.includes("-")) {
        const [num1, num2] = input.split("-");
        const result = parseInt(num1) - parseInt(num2);
        document.getElementById("result").innerHTML = result;
    } else if (input.includes("*")) {
        const [num1, num2] = input.split("*");
        const result = parseInt(num1) * parseInt(num2);
        document.getElementById("result").innerHTML = result;
    } else if (input.includes("/")) {
        const [num1, num2] = input.split("/");
        const result = parseInt(num1) / parseInt(num2);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Invalid input";
    }
});
