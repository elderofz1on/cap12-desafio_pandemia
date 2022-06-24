function som_perdeu_vida () {
	
}
input.onButtonPressed(Button.A, function () {
	
})
function som_abertura () {
	
}
function som_ganha_ponto () {
	
}
function som_ganhou_vida () {
	
}
input.onButtonPressed(Button.B, function () {
	
})
/**
 * Pontos de Atenção:
 * 
 * Na página 158 passamos a indicação para adicionar dois blocos extras para testes:
 * 
 * alterar virus_y por 1
 * 
 * definir virus_tipo para 0
 * 
 * Estes dois blocos NÃO foram adicionados aqui, portanto você terá de adicioná-los manualmente e depois de utilizados, podem ser removidos.
 * 
 * Todos os blocos que estão sendo apresentados aqui são os mesmos que estão apresentados na pág.  172.
 * 
 * Você irá observar que adicionamos alguns blocos mostrar ícone, são para representação gráfica de algumas ações que ocorrem ao perder pontos, ou não capturar alguns tipos de vírus.
 */
game.setScore(0)
game.setLife(3)
let jogador_X = 2
let jogador_Y = 4
let virus_x = randint(0, 4)
let virus_y = 0
let virus_tipo = randint(0, 2)
let virus_descida_lenta = true
let fim_de_jogo = false
let resgates = 0
let perdas = 0
let espera_virus = 450
basic.showString("GO!")
basic.forever(function () {
	
})
