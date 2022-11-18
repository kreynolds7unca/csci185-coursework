const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    // console.log(`
    //     get tracks from spotify based on the search term
    //     "${term}" and load them into the #tracks section 
    //     of the DOM...`);
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data); 
}

async function getAlbums (term) {
    // console.log(`
    //     get albums from spotify based on the search term
    //     "${term}" and load them into the #albums section 
    //     of the DOM...`);
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
}

async function getArtist (term) {
    // console.log(`
    //     get artists from spotify based on the search term
    //     "${term}" and load the first artist into the #artist section 
    //     of the DOM...`);
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());
    if (data.length === 0){
        document.querySelector('#artist').innerHTML = "No Results Found"; 
        return; 
    }
    console.log(data[0].name); 
    console.log(data[0].image_url); 
    const template = `
        <section class="artist-card" id="${data[0].id}">
        <div>
            <img src="${data[0].image_url}">
            <h2>${data[0].name}</h2>
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    View on Spotify
                </a>
    `; 
    // console.log(template); 
    document.querySelector('#artist').innerHTML = template;
};

/*
The PLAN
1. Create the URL Endpoint based on the term
2. Go out to Spotify and ask for the artist info matching 
    the search term. To do this, we need to use the fetch API.
3. We are going to wait for Spotify to respond to us. 
4. Once Spotify gives us our data, we're going to 
    print it to the console. 
5. Figure how to display our artist info in an creative way. 
*/ 


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}