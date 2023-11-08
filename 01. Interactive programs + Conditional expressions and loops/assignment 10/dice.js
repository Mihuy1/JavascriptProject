'use strict';
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function calculateProbability(numDice, desiredSum) {

    const maxTries = 1000;
    let successCount = 0;

    for (let i = 0; i < maxTries; i++) {
        let sum = 0;

        for (let j = 0; j < numDice; j++) {
            sum += rollDice();
        }

        if (sum === desiredSum)
            successCount++;
    }

    const probability = (successCount / maxTries) * 100;
    return probability.toFixed(2);
}

const dice = parseInt(prompt('How many dice to roll:'))
const desiredSum = parseInt(prompt('Enter desired sum:'))

document.querySelector('#chanceDice').innerHTML = `Probability to get sum ${desiredSum} with ${dice} is ${calculateProbability(dice, desiredSum)}`