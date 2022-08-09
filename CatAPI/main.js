console.log('Hello, World');

const URL = 'https://api.thecatapi.com/v1/images/search';

const cImg = (link) => {
    fetch(link)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });
};

const recargar = async () => {
    const URL2 = 'https://api.thecatapi.com/v1/images/search';

    try{
        await cImg(URL2);    
    } catch(error){
        console.error(error)
    }
}

cImg(URL);
