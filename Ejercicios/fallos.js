
const my2Fetch = function () {

    /**Aca empieza el objeto xmlhttp... */
    let xhr = new XMLHttpRequest();

    my2Fetch.prototype.target = (url,parametros) => {
                this.urlHTTP = url,
                this.parameters = parametros
            };

    my2Fetch.prototype.start = () => {
        xhr.open(this.parameters.method,this.urlHTTP,true);

        xhr.responseType = 'json';

        const headers = this.parameters.headers;

        Object.keys(headers).forEach(  
            key => xhr.setRequestHeader(key,headers[key]
        ));
        
        this.parameters.hasOwnProperty(body) ?
            xhr.send(this.parameters.body):
            xhr.send();

        xhr.onload = () => {
            if (xhr.status !== 200){
                spanError.innerText = `Hubo un Error = Tipo ${xrh.status}`
            }else{        
                console.log('Exito in my2Fetch: ',xhr.response);           
            }
        };
        return xhr.response;
    };

};

const fetchTres = async (url, parametros) => {

    let xhr = new XMLHttpRequest();

    xhr.open(parametros.method,url,true);

    xhr.responseType = 'json';

    Object.keys(parametros.headers).forEach( 
            
        key => xhr.setRequestHeader(key,parametros.headers[key]));


    xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200){
            spanError.innerText = `Hubo un Error = Tipo ${xrh.status}`
        }else{
    
            console.log('Exito in myFetch3: ',xhr.response);
       
        }
    };

    const respuesta = await xhr.response
    return respuesta;

}

/* Conclusiones*/

    /**Como eh aprendido, usar async ó promesas requiere mas que de solo logica,tenemos que entender que la  aplicación de esta herramientas requere de entender como funcionan. Al parecer tienen una prioridad, la cúal esta definida, esta aplica en base a que esta en mayor o menor prioridad, tambien depende de en que lista estan puestas, ya sea macro o micro tareas (esto lo define el navegador) por eso, la forma de usarlas tiene sentido dentro de su esquema, ahi es el punto donde debemos manipulamos la aplicación de las mismas */