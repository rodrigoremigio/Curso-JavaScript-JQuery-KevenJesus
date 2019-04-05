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

/*---------------------------------*\
	    Aula 13 - Variáveis
\*---------------------------------*/

var nome = "Rodrigo"; // Escopo global

function teste() {
	nome = "Cris"; // Escopo local
}

teste();
console.log(nome);

function testeDois() {
	let name = "Jesus"; // Let especifica que a variável é só local.
}

// "Const" cria uma variável que não pode ser alterada.
const nomeConst = "Rodrigo";
// nomeConst = "Remígio";
console.log(nomeConst);

/*---------------------------------*\
	     Aula 14 - Objetos
\*---------------------------------*/

var car = {
	placa: "ABC-1234",
	modelo: "Sedã",
	marca: "Hyundai",
	opcionais: {
		cambio: "Automático",
		conbustivel: "Flex"
	}
};

console.log(car);
console.log(car.marca);

/*---------------------------------*\
	      Aula 15 - Arrays
\*---------------------------------*/

var arrayOne = ['Rodrigo', 28, 'casado', {time: 'Flamengo'}];
console.log(arrayOne); // Acessa todo o array
console.log(arrayOne[0]); // Acessa por índice

/*---------------------------------*\
       Aula 17 - Condicionais
\*---------------------------------*/

var filho = "Bart";
var pai = "Hommer";

if("Bart" == filho) {
	console.log("Sim, é filho.");
} else {
	console.log("Não é filho.");
}

if("Hommer" == filho) {
	console.log("Sim, é filho.");
} else if("Hommer" == pai) {
	console.log("Sim, é pai.");
}

switch(pai) {
	case "Bart":
		console.log("Bart é o pai.");
	break;

	case "Hommer":
		console.log("Hommer é o pai.");
	break;
}

switch(filho) {
	case "Lisa":
		console.log("Lisa é a filha.");
	break;

	case "George":
		console.log("George é o filho.");
	break;

	default:
		console.log("Nenhum é o filho.");
	break;
}

/*---------------------------------*\
 Aula 18 - For, forEach, Map e While
\*---------------------------------*/

var js = document.getElementsByClassName('js');

// FOR

for (let i = 0; i < js.length; i++) {
	let texto = js[i].innerHTML;
	console.log(texto);
	js[i].innerHTML = 'Curso ' + texto + ' JS.';
}

// FOREACH só percorre tipo array

var array = ['Paul', 'John', 'Ringo', 'George'];

array.forEach(function(elemento, indice) {
	if(elemento === 'John') {
		array[indice] = 'Yoko Ono'
	}
});

console.log(array);

// MAP também só percorre array, mas ele retorna um novo elemento

var newarray = [100, 101, 102, 103];

var novo = newarray.map(function(element, index) {
	if(element === 102) {
		element = 'Cento e dois';
	}

	return element;
});

console.log(novo);

// WHILE

var iii = 0;
while(iii < 5) {
	console.log('Oi')
	iii++;
}