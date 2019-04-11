/*---------------------------------*\
     Aula 22 - Eventos / Hover
\*---------------------------------*/

var link = document.getElementById("link");
var trs = document.getElementsByClassName("trs");

// "HOVER" é no JQuery, no JS, qualquer ação relacionada ao MOUSE começa com "mouse..."
// Nesse caso, usamos o "mouseover"
link.addEventListener("mouseover", function(){
	// "classList" lista todas as classes e "add" adiciona uma classe. 
	link.classList.add("link")
})

// "mouseleave" é quando tira o mouse de cima do local
link.addEventListener("mouseleave", function(){
	link.classList.remove("link")
})

for (var i = 0; i < trs.length; i++) {
	trs[i].addEventListener("mouseover", function(){
		this.classList.add("tractive");
	})

	trs[i].addEventListener("mouseleave", function(){
		this.classList.remove("tractive");
	})
}

/*---------------------------------*\
     Aula 23 - Eventos / Change
\*---------------------------------*/

var linguagens = document.getElementById("languages");

linguagens.addEventListener("change", function(){
	var options = this.options;
	var itemAtual = this.selectedIndex;
	console.log(options[itemAtual].text);
})

/*---------------------------------*\
      Aula 24 - Eventos / Bur
\*---------------------------------*/

var nome1 = document.getElementById("nome");
var sobrenome1 = document.getElementById("sobrenome");

nome1.addEventListener("blur", function(){
	sobrenome1.value = this.value;
})