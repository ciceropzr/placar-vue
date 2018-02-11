<template>
	<section>
		<div>
			<label>Sua idade:</label>
			<input v-model="idade" v-on:keyup.enter='suaidade'>
		</div>
		<button v-on:click='suaidade'>Pode casar?</button>
		<p>Você tem {{idade}} anos. E {{casar}}</p>
	</section>
</template>

<style scoped>
. {
	margin: 0;
	padding: 0;
}
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}	
</style>

<script>
	export default {
		name:'Casar',
		data () {
			return {
				idade:'',
				casar:''
			}
		},
		methods: {
			suaidade (){
				if ( this.idade >= 16 && this.idade < 18){
					return this.casar= 'precisa da permissão dos resposaveis legais para casar.'
				}	if ( this.idade >= 18){
					return this.casar= 'pode se casar a vontade!'
				} else {
					return this.casar= 'é proibido por lei se casar com menos de 16 anos'
				}
			}

		}
	}
</script>