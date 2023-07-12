//https://mindicador.cl/api/{tipo_indicador}/{dd-mm-yyyy}

let moneda = "dolar";
let f = new Date ();
let fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
const url = "https://mindicador.cl/api";
const https = require ('https');
//const consulta 


async function getResponse(){
    try{
        let res = await fetch(`${https}://mindicador.cl/api/${moneda}/${fecha}`);        
        let data = await res.json();     
        //console.log(data.serie[0].valor);
        //let valor = parseFloat(data.serie[0].valor);
        return data;
    }catch(error){
        console.log(error);
    }
    //console.log(object);
}
getResponse();
// //console.log(fecha);


let respuesta = getResponse();
respuesta.serie[0].valor;