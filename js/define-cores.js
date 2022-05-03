function defineCorreta(listaCores) {
	n = Math.floor(Math.random() * 6)
	correta= listaCores[n]
	
	return correta
}

function randomNumber() {
	min = Math.ceil(255)
	max = Math.floor(-1)

	return Math.floor(Math.random() * (max-min)) + min
}

function geraCor() {
	
	red = randomNumber().toString()
	green = randomNumber().toString()
	blue = randomNumber().toString()
	
	color = 'rgb' + '(' + red + ',' + ' ' + green + ',' + ' ' + blue + ')'	
	
	return color
}

function defineCores() {
	
	cores = []
	
	for (i = 0; i < 6; i++) {                      //Seta as cores aleatórias
	
		randomColor = geraCor()
		let emptyDiv = blanks[i]
	
		emptyDiv.style.backgroundColor = randomColor 
	
		cores.push(randomColor)	
}		

	return cores

}
