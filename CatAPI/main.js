

const API_URl_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URl_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=0e67e603-210b-4a02-9582-778b82a47c62';
const API_ERROR_MICHIS = 'https://http.cat/'

const spanError = document.getElementById("Error");

const loadRandomMichis = async () => {
    const res = await fetch(API_URl_RANDOM);
    const data = await res.json();

    console.log('Random');
    console.log(data);

    if (res.status !== 200) {
        
        spanError.innerHTML = `"Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
     
    img1.src = data[0].url;
    img2.src = data[1].url;

    }
};

const loadFavouriteMichis = async () => {
    const res = await fetch(API_URl_FAVORITES);
    const data = await res.json();

    console.log('Favourites');
    console.log(data);

    if (res.status !== 200) {
        
        spanError.innerHTML = `"Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
        
    }
};

const saveFavouriteMichis = async () => {
    const res = await fetch(API_URl_FAVORITES,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            image_id: "e7h"

        }),
    });
    const data = await res.json();


    console.log('Save');
    console.log(res);

    if (res.status !== 200) {
        
        spanError.innerHTML = `"Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }
};


loadRandomMichis();
loadFavouriteMichis();

