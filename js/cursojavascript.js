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