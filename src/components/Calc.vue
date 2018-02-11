<template>
	<section>
		<div class="valores">
			<div class="valor1">
				<label>Valor 1</label>
				<input v-model="valor1">
			</div>
			<div class="valor2">
				<label>Valor 2</label>
				<input v-model="valor2">
			</div>
		</div>
		<div class="operacao">
			<button v-on:click='adicao'>+</button>
			<button v-on:click='subtracao'>-</button>
			<button v-on:click='multiplicacao'>*</button>
			<button v-on:click='divisao'>/</button>
			<button v-on:click='limpar'>CE</button>
		</div>
		<p>{{resultado}}</p>
	</section>
</template>
<script>
	export default {
		name:'Calc',
		data() {
			return {
				valor1: 0,
				valor2: 0,
				resultado: ''
			}			
		},
		methods: {
				adicao () { 
					return this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2)
				},
				subtracao () { 
					return this.resultado = parseFloat(this.valor1) - parseFloat(this.valor2)
				},
				multiplicacao () { 
					return this.resultado = parseFloat(this.valor1) * parseFloat(this.valor2)
				},
				divisao () { 
					return this.resultado = parseFloat(this.valor1) / parseFloat(this.valor2)
				},
				limpar () {
					return this.valor1 = 0,
							this.valor2 = 0,
							this.resultado = ''
				}
			}



	}
	
</script>
<style scoped>
	
</style>