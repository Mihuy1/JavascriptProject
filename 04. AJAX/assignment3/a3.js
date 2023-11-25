'use strict';

const targetDiv = document.getElementById('results');

document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const api = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(api);
        const data = await response.json();

        console.log('Search result: ', data);

        dataStuff(data)

    } catch (error) {
        console.log(error.message + ' error')
    } finally {
        console.log('TV Show Search Complete!');
    }
});

function dataStuff(data) {

    targetDiv.innerHTML = '';

    for (const tvShow of data) {
        const article = document.createElement('article');

        const h2Element = document.createElement('h2');
        h2Element.innerText = tvShow.show.name;

        const imgElement = document.createElement('img');
        imgElement.src = tvShow.show.image?.medium;
        imgElement.alt = tvShow.name;

        const aElement = document.createElement('a');
        aElement.href = tvShow.show.url;
        aElement.innerText = 'Go to TV Show';
        aElement.target = "_blank";

        const divElement = document.createElement('div');
        divElement.innerHTML = tvShow.show.summary;

        article.append(h2Element, imgElement, aElement, divElement);

        targetDiv.append(article);
    }
}