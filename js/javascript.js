let score = 0
let highscore = 0
let pontuacao = 0
let pontos = document.querySelector(".pontos")
let recorde = document.querySelector(".recorde")

// INÍCIO DO JOGO

let blanks = document.querySelectorAll(".cor")
cores = defineCores()
corCerta = defineCorreta(cores)
correctColor = document.querySelector("#guess")
correctColor.textContent = corCerta	 //Escreve na tela o código da cor certa

console.log("cor certa: " + corCerta)

colors.addEventListener('click', function(event){
	if (event.target.style.backgroundColor == corCerta){
		console.log('acertou')
		score += 1
		pontos.textContent = "Score: " + score
	} else{
		console.log('errou')
		score = 0
		pontos.textContent = "Score: " + score
	}

	if (score > highscore) {
		highscore = score
		recorde.textContent = "Highscore: " + highscore
	}

	let blanks = document.querySelectorAll(".cor")
	cores = defineCores()
	corCerta = defineCorreta(cores)
	correctColor = document.querySelector("#guess")
	correctColor.textContent = corCerta	 //Escreve na tela o código da cor certa

	console.log("cor certa: " + corCerta)
})
