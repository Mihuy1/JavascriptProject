'use strict';

const targetElement = document.querySelector('#results');

const formElement = document.querySelector('#norris');

const searchElement = document.querySelector('input[name=q]')

let url = 'https://api.chucknorris.io/jokes/search?query='

formElement.addEventListener('submit', async function(evt) {

    evt.preventDefault();

    const query = searchElement.value;

    console.log(`Search Query: ${query}`);

    url += query

    try {
        const response = await fetch(url);

        const jsonData = await response.json();

        console.log(jsonData.result);

        DataHandler(jsonData);

    }

    catch(error) {
        console.log('ERROR: ' + error);
    }

});

function DataHandler(jsonData) {

    for(let joke of jsonData.result) {

        const textElement = document.createElement('p');
        textElement.textContent = joke.value;

        const articleElement = document.createElement('article');
        articleElement.appendChild(textElement);

        targetElement.appendChild(articleElement);

    }

}
