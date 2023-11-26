'use strict';

const api = 'https://api.chucknorris.io/jokes/random';

ApiQuery();


async function ApiQuery() {

    try {
        const response = await fetch(api);

        const request = await response.json();

        console.log(request.value);
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log('API query complete!')
    }
}