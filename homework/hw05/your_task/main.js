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
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data); 
    console.log(data[0]);
    console.log(data[0].name);
    console.log(data[0].artist.name);
    console.log(data[0].album.image_url);
    document.querySelector("#tracks").innerHTML = ""; 
    for(let i = 0; i < 5; i++) {
        const template = `
        <section class="track-item preview" onclick="playTrack('${data[i].id}')">
            <img alt = "this is an album cover for ${data[i].name}" src=${data[i].album.image_url}>
            <i class="fas fa-play play-track" aria-hidden="true"></i>
            <div class="label">
                <h2>${data[i].name}</h2>
                <p>${data[i].artist.name}</p>
            </div>
        </section>
            `;
        document.querySelector("#tracks").insertAdjacentHTML('beforeend', template); 
    }
}

function playTrack(id) {
    const template = `
        <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template; 
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    // console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
    console.log(data); 
    // console.log(data[0]);
    // console.log(data[0].name);
    // console.log(data[0].image_url);
    document.querySelector("#albums").innerHTML = ""; 
    for(let i = 0; i < 10; i++) {
    const template = `
        <section class="album-card" id="${data[i].id}">
        <div>
            <img alt = "this is the album ${data[i].name}" src="${data[i].image_url}">
            <h2>'${data[i].name}'</h2>
            <div class="footer">
                <a href="${data[i].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `;
    document.querySelector("#albums").insertAdjacentHTML('beforeend', template); 
    }
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);
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
            <img alt = "Photo of ${data[0].name}" src="${data[0].image_url}">
            <h2>${data[0].name}</h2>
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    View on Spotify
                </a>
    `; 
    // console.log(template); 
    document.querySelector('#artist').innerHTML = template;
};

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}