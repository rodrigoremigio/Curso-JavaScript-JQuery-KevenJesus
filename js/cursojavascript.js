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
