document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const api = `https://api.tvmaze.com/search/shows?q=${query}`

    try {
        const response = await fetch(api);
        const data = await response.json();

        console.log('Search result: ', data);
    }
    catch(error) {
        console.log(error.message)
    }

    finally {
        console.log('TV Show Search Complete!');
    }
})