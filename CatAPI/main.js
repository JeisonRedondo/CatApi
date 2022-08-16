

const API_URl_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URl_FAVORITES = 'https://api.thecatapi.com/v1/favourites';
const API_URl_FAVORITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`
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
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
     
    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavouriteMichi(data[0].id);
    btn2.onclick = () => saveFavouriteMichi(data[1].id);
    }
};

const loadFavouriteMichis = async () => {
    const res = await fetch(API_URl_FAVORITES,{
        method:'GET',
        headers: {
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        }
    });
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
        const section = document.getElementById('favouriteMichis')
        section.innerHTML= "";

        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Michis Favoritos');
        h2.appendChild(h2Text);

        data.forEach(michi => {
            
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos');

            img.src = michi.image.url;
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavouriteMichi(michi.id);
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
            
        })
    }
};

const saveFavouriteMichi = async (id) => {
    const res = await fetch(API_URl_FAVORITES,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        },
        body:JSON.stringify({
            image_id: id

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
    } else {
        console.log('Michi guardado en favoritos');
        loadFavouriteMichis();
    }
};

const deleteFavouriteMichi= async (id) => {
    const res = await fetch(API_URl_FAVORITES_DELETE(id),{
        method: 'DELETE',
        headers:{
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        }
    });
    const data = await res.json();

    if (res.status !== 200) {
        
        spanError.innerHTML = `"Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
        console.log('Michi eliminado en favoritos');
        loadFavouriteMichis();
    }
}

loadRandomMichis();
loadFavouriteMichis();

