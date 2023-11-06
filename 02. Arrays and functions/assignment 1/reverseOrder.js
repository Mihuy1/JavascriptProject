function ReverseOrder(array) {
    for (let i = array.length; i >= 0; i--) {
        console.log(`${array[i]}`)
    }
}

const numbers = []

for (let i = 0; i < 5; i++) {
    let number = prompt(`Enter number here (${i + 1}):`)
    numbers.push(number)
}

ReverseOrder(numbers)

