const API_CAT = 'https://api.thecatapi.com/v1/images/search?limit=2';
const URL_API = 'https://api.thecatapi.com/v1/';
const parametrosGatos = {
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
    },
};

// let xhr = new XMLHttpRequest();

// xhr.open('get',API_CAT,true);
// xhr.responseType = 'json';
// xhr.send();


// xhr.onload = () => {
//     if (xhr.status !== 200){
//         spanError.innerText = `Hubo un Error = Tipo ${xrh.status}`
//     }else{

//         let responseObj = xhr.response;
//         console.log('Primer intento logrado');
//         console.log('Data:',responseObj);

//         const img1 = document.getElementById('img1');
//         const img2 = document.getElementById('img2');

//         img1.src = responseObj[0].url;
//         img2.src = responseObj[1].url;
   
//     }
// };



const promesaFetch = async (url,parametros) => {


    let xhr = new XMLHttpRequest();
    
    xhr.open('GET',url,true);
    xhr.responseType = 'json';

    // Object.keys(parametros.headers).forEach( 
    //     key => xhr.setRequestHeader(key,parametros.headers[key]
    // ));
    
    try {
        xhr.send();

        xhr.onload = () => {
            if (xhr.status !== 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
            return (xhr.response);   
            }
    }
    } catch(err) { // en lugar de onerror
        alert("Solicitud fallida");
    }

};

async function jeiFetch(url,parametros){

    let xhr = new XMLHttpRequest();

    return new Promise((resolve,reject) => {
        xhr.open('GET',url,true);
        xhr.responseType = 'json';
        Object.keys(parametros.headers).forEach( 
                key => xhr.setRequestHeader(key,parametros.headers[key]
            ));

        parametros.hasOwnProperty('body') ?
            (xhr.send(parametros.body)):
            xhr.send();

        try {
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(xhr.status)
                    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
                } else {
                    console.log(`Resuelto ${xhr.status}: ${xhr.response}`);
                    resolve(xhr.response)  
                }
        }
        } catch(err) { // en lugar de onerror
            alert("Solicitud fallida");
        }

    })
}

// ----------------------------------------------------------------------------------- 

// Funnciones de API

async function getGatitosRandom(){

    const API_RANDOM = 'images/search?limit=2';

   let data = await jeiFetch(`${URL_API}${API_RANDOM}`,parametrosGatos);
    console.log('Data: ',data);

        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url;
        img2.src = data[1].url;
}

getGatitosRandom()