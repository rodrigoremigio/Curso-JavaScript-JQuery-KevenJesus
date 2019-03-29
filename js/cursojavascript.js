/*---------------------------------*\
	   Aula 3 - getElementById
\*---------------------------------*/

console.log(document.getElementById("time-grande").innerHTML);

/*---------------------------------*\
	Aula 4 - getElementsByClassName
\*---------------------------------*/

console.log(document.getElementsByClassName("titulo")[1]);

console.log(document.getElementsByClassName("subtitulo")); //Busca a collection
console.log(document.getElementsByClassName("subtitulo")[0]); // Busca somente a posição 0 do array

/*---------------------------------*\
	Aula 5 - getElementsByTagName
\*---------------------------------*/

console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByTagName("button")[0].innerHTML);

/*---------------------------------*\
	   Aula 6 - querySelector
\*---------------------------------*/

// No caso de classes e tags, o querySlector não faz o ARRAY. Ele acessa só o primeiro elemento.
console.log(document.querySelector("#time-grande"));
console.log(document.querySelector(".subtitulo"));

/*---------------------------------*\
	 Aula 7 - querySelectorAll
\*---------------------------------*/

// Acesso a todas as classes "filho"
console.log(document.querySelectorAll(".filho"));

// Acessa somente as classes "filho" que são submissas à div de id "pai".
console.log(document.getElementById("pai").querySelectorAll(".filho"));

/*---------------------------------*\
	  Aula 8 - createElement
\*---------------------------------*/

// Criando uma DIV no console
console.log(document.createElement("div"));


var img = document.createElement("img");
img.src="http://lorempixel.com/400/200/";

var p = document.createElement("p");
p.innerHTML = "Olá, estou no console."

console.log(img, p);

/*---------------------------------*\
	  Aula 9 - appendChild
\*---------------------------------*/

//Criando uma variável para inserir  um parágrafo dentro da página.
var carro1 = document.createElement("p");
carro1.innerHTML = "Skyline";

var carro2 = document.createElement("p");
carro2.innerHTML = "350Z";

var carro3 = document.createElement("p");
carro3.innerHTML = "Sentra";

document.getElementById("nissan").appendChild(carro1);
document.getElementById("nissan").appendChild(carro2);
document.getElementById("nissan").appendChild(carro3);

/*---------------------------------*\
	   Aula 10 - removeChild
\*---------------------------------*/

// Remove um item do elemento filho
document.getElementById("nissan").removeChild(carro3);

/*---------------------------------*\
	    Aula 11 - parentNode
\*---------------------------------*/

// parentNode acessa o elemento "pai" a partir de um elemento filho
console.log(document.querySelector(".neto").parentNode);
console.log(document.querySelector(".neto").parentNode.parentNode);