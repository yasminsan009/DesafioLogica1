console.log("Perfil do Herói")
console.log("  ")
console.log("Nome do herói: Mclaren")

let XP = 7900
let ss = "Status:"

console.log("Quantidade de XP: " + XP)

if( XP < 1001){
	console.log(ss + " Ferro")
}else if(XP < 2001){
	console.log(ss +" Bronze")
}else if(XP < 3001){
	console.log(ss + " Prata")
}else if(XP < 4001){
	console.log(ss + " Ouro")
}else if(XP < 6001){
	console.log(ss + " Platina")
}else if(XP < 7001){
	console.log(ss + " Mestre")
}else if(XP < 8001){
	console.log(ss + " Ascendente")
}else if(XP < 9001){
	console.log(ss + " Mestre")
}else if(XP < 10001){
	console.log(ss + " Ascendente")
}else{
    console.log(ss + " Radiante")
}


console.log("  ")
console.log("O nosso herói Mclaren alcançou o nível Ascendente!" ) 

