/*Variaveis do botão*/
let tituloModal     = document.getElementById('tituloModal')
let textoModal      = document.getElementById('textoModal')
let modalTituloDiv  = document.getElementById('modalTituloDiv')
let btnModal        = document.getElementById('modalBotao')
function quantidaDeLinhas() {

	let qnt      = document.getElementById('qntLinhas')
	qntNum       = Number(qnt.value)
	qnt.value    = ''
	let corpo    = document.getElementById('corpo')
	let todos    = Array()/*Onde vai colocar todas as strings de escrever*/
	let escrever = ``

	if (qntNum!='') {
		// push para escrever	
		for (var i = 0; i < qntNum; i++) {
			corpo.innerHTML += `
			<tr id="tr${i}">
			
				<td>
				   <input  type="number" class="form-control"   id="xi${i}" style="transition: all 1s;">  
				</td>
				
				<td>
				   <input  type="number" class="form-control"   id="fi${i}" style="transition: all 1s;">
				</td>
				
				<td>
				   <input  type="number" class="form-control"   id="fri${i}" style="transition: all 1s;"
				</td>
				
				<td>
				   <input  type="number" class="form-control"   id="fiM${i}" style="transition: all 1s;"
				</td>
				
				<td>
				   <input  type="number" class="form-control"   id="friM${i}" style="transition: all 1s;"
				</td>
				
				<td>
				   <button type="button" class="btn btn-danger" id="ap${i}" onclick="document.getElementById('corpo').removeChild(document.getElementById('tr${i}'))" style="transition: all 1s;">X</button>
				</td>
			
			</tr>` 
		}
	}else {/*Caso não tenha nenhum caractere*/
		// Configurações do botão
		tituloModal.innerHTML    = 'Ocorreu um imprevisto'
		textoModal.innerHTML     = 'Por favor, coloque um número válido'
		modalTituloDiv.className = 'modal-header text-danger'
		btnModal.className       = 'btn btn-outline-danger'
		$('#modalAparece').modal('show')
	}
}


class ManipularTabela {
	constructor() {
		// Push escreve
		// Tabela onde vão ficar os valores
		this.tabela        = Array()
		// Valores que recebidos da tabela
		this.xi            = Array()
		this.fi            = Array()
		this.fri           = Array()
		this.fiM           = Array()
		this.friM          = Array()
		// Variáveis para calculo
		this.fiR           = Array()
		this.friR          = Array()
		this.fiMR          = Array()
		this.friMR         = Array()
		this.tabelaReverse = Array()

	}
	pegaValores() {
		for (var i = 10; i>=0; i--) {

			// Caso exista algum valor, xi é só exemplo
			if (document.getElementById(`xi${i}`)) {
				// console.log(`${i}ºValor: `+document.getElementById(`xi${i}`).value)
				this.xi.push(document.getElementById(`xi${i}`).value)
				this.fi.push(document.getElementById(`fi${i}`).value)
				this.fri.push(document.getElementById(`fri${i}`).value)
				this.fiM.push(document.getElementById(`fiM${i}`).value)
				this.friM.push(document.getElementById(`friM${i}`).value)
			}else{
				continue
			}
		}
	this.tabela.push(Array(this.xi), Array(this.fi), Array(this.fri ), Array(this.fiM ), Array(this.friM))
	
	this.fiR   = this.fi.reverse()
	this.friR  = this.fri.reverse()
	this.fiMR  = this.fiM.reverse()
	this.friMR = this.friM.reverse()

	this.tabelaReverse.push(Array(this.friR) ,Array(this.fiMR) ,Array(this.friMR) )
	return this.tabela
	}

	manipulaValores() {

		let absoluto = (val1, val2) => {
			if (document.getElementById(val1).value) {
				document.getElementById(val2).value = document.getElementById(val1).value
			} else {
				document.getElementById(val1).value  = document.getElementById(val2).value
			}
		}
		absoluto('fri0', 'friM0')
		absoluto('fi0', 'fiM0')
		let tabela = this.pegaValores()
		console.log('Tabela reversa: '+this.tabelaReverse)
		 
		
		let soma = this.fi
		let total = 0
		for (var i = 0; i < soma.length; total += Number(soma[i++]));
			let valor = document.getElementById('soma1')

		let somafiM  = Array()
		let somafriM = Array()
		
		let somatorioLista = (arP, arA) => {
			let armazenando = 0
			for (var i = 0; i <= arA.length; armazenando += Number(arA[i++])){
				arP.push(armazenando)
			}
			arP.splice(0, 1)
		}
		somatorioLista(somafiM, this.fiR)
		somatorioLista(somafriM, this.friR)
		// console.log('SOMA DOS VALORES fi: '+somafiM)
		// console.log('SOMA DOS VALORES fri: '+somafriM)

		somafiM.forEach(function escreverEmCima(arg, index, array) {
			// fri${}
			let x = Number(document.getElementById(`fi${index}`).value)
			let total = Number(document.getElementById('soma1').value)
			x = (x/total)*100
			document.getElementById(`fri${index}`).value = x
			console.log(document.getElementById(`fi${index}`).value)
		})

		somafriM.forEach(function escreverEmCima2(arg, index, array) {
			let x = Number(document.getElementById(`fi${index}`).value)
			
			document.getElementById(`fiM${index}`).value = arg
			console.log(document.getElementById(`fi${index}`).value)
		})
		let somafriMM = Array()
		somatorioLista(somafriMM, somafriM)
		somafriMM.forEach(function escreverEmCima3(arg, index, array) {
			let x = Number(document.getElementById(`fiM${index}`).value)
			
			document.getElementById(`friM${index}`).value = arg
			console.log(document.getElementById(`friM${index}`).value)
		})

		valor.value = total

		tabela.forEach(function analise(element, index, array) {

			if (index==0 || index==1) {
				console.log('Pulou')

			} else{

				element.forEach(function analiseI(elementI, indexI, arrayI) {

					elementI.forEach(function analiseI2(elementI2, indexI2, arrayI2){
						// console.log('Valor '+elementI2+' da lista '+index+' que é o ponto '+indexI2)
						if (elementI2!='' && index=='2') {
							// console.log(`${index}fri (%): `+elementI2)

						} else if (elementI2!='' && index=='3') {
							// console.log(`${index}Fi: `+elementI2)

						} else if (index=='4') {
							if (indexI2==0) {

							}

						}
					
					})//AnaliseI2 final
				
				})//AnaliseI final
			
			}//ELSE final
		
		})//FOREACH final
	
	}//Final fução
	
	escreveValores() {

	}
}