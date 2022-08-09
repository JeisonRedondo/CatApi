console.log('Hello, World');

const URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

const loadImage = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}


// const cImg = (link) => {
//     fetch(link)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });
// };

// const recargar = async () => {
//     const URL2 = 'https://api.thecatapi.com/v1/images/search';

//     try{
//         await cImg(URL2);    
//     } catch(error){
//         console.error(error)
//     }
// }

// cImg(URL);

loadImage();
