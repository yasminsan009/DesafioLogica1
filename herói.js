//Desafio - Classificação do herói

console.log("Perfil do Herói")
console.log("  ")
console.log("Nome do herói: Mclaren")

let XP = 7900
console.log("Quantidade de XP: " + XP)

if( XP < 1001){
	console.log("Status: Ferro")
}else if(XP < 2001){
	console.log("Status: Bronze")
}else if(XP < 3001){
	console.log("Status: Prata")
}else if(XP < 4001){
	console.log("Status: Ouro")
}else if(XP < 6001){
	console.log("Status: Platina")
}else if(XP < 7001){
	console.log("Status: Mestre")
}else if(XP < 8001){
	console.log("Status: Ascendente")
}else if(XP < 9001){
	console.log("Status: Mestre")
}else if(XP < 10001){
	console.log("Status: Ascendente")
}else{
    console.log("Status: Radiante")
}

console.log("  ")
console.log("O nosso herói Mclaren está próximo a subir de status") 
console.log("Falta apenas 101 pontos, continue jogando para alcançar nível Mestre! ")