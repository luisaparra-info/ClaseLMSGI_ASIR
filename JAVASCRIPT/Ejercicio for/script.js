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

function avglocalidad(){
  
   const valor = document.getElementById("localidad").value;
   document.getElementById("res_avglocalidad").innerHTML=valor;
}

