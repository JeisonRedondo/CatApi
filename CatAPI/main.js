
const API_URL = 'https://api.thecatapi.com/v1/'

const API_URl_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';
const API_ERROR_MICHIS = 'https://http.cat/'

const spanError = document.getElementById("Error");

const loadRandomMichis = async () => {
    const RANDOM_MICHIS = 'images/search?limit=8';
    const res = await fetch(`${API_URL}${RANDOM_MICHIS}`);
    const data = await res.json();

    console.log('Random');
    console.log(data);

    if (res.status !== 200) {
        
        spanError.innerHTML = `Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
    
    createMichis(data, "randomMichis", '👍',saveFavouriteMichi);

    }
};

const loadFavouriteMichis = async () => {
    
    const res = await fetch(`${API_URL}favourites`,{
        method:'GET',
        headers: {
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        }
    });
    const data = await res.json();

    console.log('Favourites');
    console.log(data);

    if (res.status !== 200) {
        
        spanError.innerHTML = `Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
        
        const imagesMichis = data.map(item => {
            const container = {};

            container.url = item.image.url;
            container.id = item.id;

            return container;
        });
        createMichis(imagesMichis, "favouriteMichis", '👎',deleteFavouriteMichi);

        
    }
};

const saveFavouriteMichi = async (id) => {
    const res = await fetch(`${API_URL}favourites`,{
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
        
        spanError.innerHTML = `Hubo un error: Error_${res.status},${data.message}`;
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
    const res = await fetch(`${API_URL}favourites/${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        }
    });
    const data = await res.json();

    if (res.status !== 200) {
        
        spanError.innerHTML = `Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
        console.log('Michi eliminado en favoritos');
        loadFavouriteMichis();
    }
}

const uploadMichiPhoto = async () => {
    const UPLOAD = 'images/upload';
    const form = document.getElementById("uploadingForm")
    const formData = new FormData(form);
    const img = document.getElementById("uploadImage");

    console.log(formData.get('file'));

    const res = await fetch(`${API_URL}${UPLOAD}`,{
        method: 'POST',
        headers:{
            // 'Content Type':'multipart/formdata',
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        },
        body:formData,
    })

    const data = await res.json();

    if (res.status !== 201) {
        
        spanError.innerHTML = `Hubo un error: Error_${res.status},${data.message}`;
        spanError.insertAdjacentHTML(
            "beforeend",
            `<img src =${API_ERROR_MICHIS}${res.status} id="img-error">`
        );
    }else {
        
        img.src = data.url;
        console.log('Foto de MICHI Subida')
        console.log({data})
        console.log(data.url)
        saveFavouriteMichi(data.id)

     
        
    }

    
}

loadRandomMichis();
loadFavouriteMichis();

async function createMichis(michisData, sectionId, messsageBtn, btnFunction) {

    const section = document.getElementById(sectionId)
    section.innerHTML= "";

    
    michisData.forEach(michi => {
        
        const article = document.createElement('article');
        const img = document.createElement('img');
        const btn = document.createElement('button');
        const btnText = document.createTextNode(messsageBtn);

        img.src = michi.url;
        btn.classList.add('section__btn--style');
        btn.appendChild(btnText);
        btn.onclick = () => btnFunction(michi.id);
        article.classList.add('section-image__container--group');
        article.appendChild(img);
        article.appendChild(btn);
        section.appendChild(article);
        
    })
}