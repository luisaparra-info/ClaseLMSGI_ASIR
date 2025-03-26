const temperaturas = [
    [23,25,22,16,24,22,27],
    [33,35,32,36,34,32,37],
    [13,15,12,26,14,12,17],
    [25,25,25,25,25,25,25]]; 

const localidades = ["Vera","Huércal-Overa","Albox","Mojácar"];

const data = document.getElementById("localidad");

for(let i=0; i<localidades.length;i++){
    data.innerHTML = data.innerHTML + `<option value="${localidades[i]}">${localidades[i]}</option>`
}

/* Otra manera de rellenar el select de localidades 
localidades.forEach((localidad, index) => {
    const option = document.createElement("option");
    option.value = index; // Guardamos el índice para referencia
    option.textContent = localidad;
    data.appendChild(option);
});
*/

function getIndexOfLocalidad(nombre){
 if (nombre==="")return -1;
return localidades.indexOf(nombre);
}

function calcularMedia(arrayT) {
    let suma = 0;
    arrayT.forEach(num => {
        suma += num;
    });
    return arrayT.length ? (suma / arrayT.length).toFixed(2) : "0.00";
}


function avglocalidad(){
  
   const nombre = document.getElementById("localidad").value;
   const indice= getIndexOfLocalidad(nombre);
   if (indice>=0){
    document.getElementById("res_avglocalidad").innerHTML=calcularMedia(temperaturas[indice]);
   }else{
    document.getElementById("res_avglocalidad").innerHTML="No has seleccionado ninguna localidad";
   }
}


document.getElementById("avgdia").addEventListener("click", function() {
    const diaIndex = document.getElementById("dia").selectedIndex - 1;
    if (diaIndex < 0) return;
    
    const avgTemp = temperaturas.reduce((sum, tempArray) => sum + tempArray[diaIndex], 0) / temperaturas.length;
    
    document.getElementById("res_avgdia").textContent = `Media: ${avgTemp.toFixed(2)}°C`;
});

document.getElementById("avg").addEventListener("click", function() {
    const allTemps = temperaturas.flat();
    const avgTemp = allTemps.reduce((sum, temp) => sum + temp, 0) / allTemps.length;
    
    document.getElementById("res_avg").textContent = `Media global: ${avgTemp.toFixed(2)}°C`;
});


