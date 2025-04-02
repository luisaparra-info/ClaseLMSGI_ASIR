
/*const temperaturas = [
    [23,25,22,16,24,22,27],
    [33,35,32,36,34,32,37],
    [13,15,12,26,14,12,17],
    [25,25,25,25,25,25,25]]; 

const localidades = ["Vera","Huércal-Overa","Albox","Mojácar"];
*/
function setSelectLocalidades(localidades){
    const data = document.getElementById("localidad");
    for(let i=0; i<localidades.length;i++){
        data.innerHTML = data.innerHTML + `<option value="${localidades[i]["nombre"]}">${localidades[i]["nombre"]}</option>`
    }
}

fetch("datos.json")
  .then(response => response.json())
  .then(datos => {console.log(datos);
    setSelectLocalidades(datos.localidades);
    })
  .catch(error => console.error("El fichero no existe"))
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(datos));

  


/* Otra manera de rellenar el select de localidades 
localidades.forEach((localidad, index) => {
    const option = document.createElement("option");
    option.value = index; // Guardamos el índice para referencia
    option.textContent = localidad;
    data.appendChild(option);
});
*/

/**
 * 
 * @param {*} arrayT 
 * @returns 
 */


function calcularMedia(arrayT) {
    let suma = 0;
    arrayT.forEach(num => {
        suma += num;
    });
    return arrayT.length ? (suma / arrayT.length).toFixed(2) : "0.00";
}
function calcularMediaDia(dia) {
    let suma = 0;
    temperaturas.forEach(localidad => {
        suma += localidad[dia];
    });
    return temperaturas.length ? (suma / temperaturas.length).toFixed(2) : "0.00";
}

/**
 * Esta función no la vamos a usar, vamos a reutilizar código.
 * @returns 
 */
function calcularMediaGlobal() {
    let suma = 0;
    temperaturas.forEach(localidad => {
        localidad.forEach(num => {
            suma += num;
        }

        );
    });
    return temperaturas.length ? (suma / temperaturas.length).toFixed(2) : "0.00";
}

function avglocalidad(){
  
   //const nombre = document.getElementById("localidad").value;
   //const indice= getIndexOfLocalidad(nombre);
    const indice = document.getElementById("localidad").selectedIndex-1;

   if (indice>=0){
    document.getElementById("res_avglocalidad").innerHTML=calcularMedia(temperaturas[indice]);
   }else{
    document.getElementById("res_avglocalidad").innerHTML="No has seleccionado ninguna localidad";
   }
}


document.getElementById("avgdia").addEventListener("click", function() {
    const diaIndex = document.getElementById("dia").selectedIndex - 1;
    if (diaIndex < 0) return;
    
    const avgTemp = calcularMediaDia(diaIndex);
    
    document.getElementById("res_avgdia").textContent = `Media: ${avgTemp}°C`;
});

document.getElementById("avg").addEventListener("click", function() {
    const allTemps = temperaturas.flat();
    document.getElementById("res_avg").textContent = `Media global: ${calcularMedia(allTemps)}°C`;
});


