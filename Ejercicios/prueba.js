const API_CAT = 'https://api.thecatapi.com/v1/images/search?limit=2';

const spanError = document.getElementById('error');

let xhr = new XMLHttpRequest();

xhr.open('get',API_CAT,true);
xhr.responseType = 'json';
xhr.send();


xhr.onload = () => {
    if (xhr.status !== 200){
        spanError.innerText = `Hubo un Error = Tipo ${xrh.status}`
    }else{

        let responseObj = xhr.response;
        console.log('Primer intento logrado');
        console.log('Data:',responseObj);

        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = responseObj[0].url;
        img2.src = responseObj[1].url;
   
    }
};



const promesaFetch = new Promise((resolve, reject) => {

    const parametros = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        },
    }

    let xhr = new XMLHttpRequest();
    xhr.open(parametros.method,`https://api.thecatapi.com/v1/favourites`,true);

    xhr.responseType = 'json';

    Object.keys(parametros.headers).forEach( 
        key => xhr.setRequestHeader(key,parametros.headers[key]
    ));

    
    parametros.hasOwnProperty('body') ?
            xhr.send(this.parameters.body):
            xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200){
            reject(spanError.innerText = `Hubo un Error = Tipo ${xrh.status}`)
        }else{ 
            resolve(xhr.response);
        }
    };
})

// -----------------------------------------------------------------------------------
    const parametros = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY':'0e67e603-210b-4a02-9582-778b82a47c62',
        },
    }

    
    promesaFetch.then(res => {console.log('respuesta Promesa: ',res)})
                .catch(err => console.log(err))

    

    