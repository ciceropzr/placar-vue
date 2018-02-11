<template>
<section> 
	<div class="placar">
	    <div class="casa grifinoria">
	    	<img src="http://2.bp.blogspot.com/-9JEpY109__4/UfQOjc7pAoI/AAAAAAAABy4/1f8tWCl3PuI/s400/633776+c%C3%B3pia.png">
	    	<div class="botão">
	    		<button v-on:click='golgrifinoria'>Gol</button>
	    		<button v-on:click='pomodeourogrifinoria'>Pomo de Ouro</button>
	    		<button v-on:click='limpargrifinoria'>Zerar</button>
	    	</div>
	    	<p>{{grifinoria}}</p>
	    </div>
	    <div class="casa corvinal">
	    	<img src="http://2.bp.blogspot.com/_5-tJnYKHe_M/TLJdbx-LjXI/AAAAAAAAApY/ENyLc1HddDU/s1600/Ravenclaw.JPG">
	    		<div class="botão">
  	    		 	<button v-on:click='golcorvinal'>Gol</button> 	
 	    			<button v-on:click='pomodeourocorvinal'>Pomo de Ouro</button>
 	    			<button v-on:click='limparcorvinal'>Zerar</button>
	    		</div>
	    	<p>{{corvinal}}</p>
		</div>
	</div>
	<div>
		<button v-on:click='qganhador'>Quem Ganhou?</button>
		<p>{{ganhador}}</p>
	</div>
</section>  
</template>

<script>
export default {


  name: 'hello',
  data () {
  	return {
  		grifinoria: 0,
  		corvinal: 0,
  		ganhador:''
  	}
    
  },
  	methods: {
  		golgrifinoria () {
  			return this.grifinoria = this.grifinoria +10,
  					this.ganhador = ''
  		},
  		pomodeourogrifinoria () {
  			return this.grifinoria = this.grifinoria +150,
  					this.ganhador = 'Grifinoria Ganhou'
  		},
  		limpargrifinoria () {
  			return this.grifinoria = 0,
  					this.ganhador = ''
  		},
  		golcorvinal () {
  			return this.corvinal = this.corvinal +10,
  					this.ganhador = ''
  		},
  		pomodeourocorvinal () {
  			return this.corvinal = this.corvinal +150,
  					this.ganhador = 'Corvinal Ganhou'
  		},
  		limparcorvinal () {
  			return this.corvinal = 0,
  					this.ganhador = ''
  		},
  		qganhador () {
  			if (this.grifinoria > this.corvinal || this.grifinoria > 150) {
  				return this.ganhador=' Grifinoria Ganhou!!'
  			} if ( this.grifinoria < this.corvinal || this.corvinal > 150) {
  				return this.ganhador='Corvinal Ganhou!!'
  			} else {
  				return this.ganhador='Empate!!'
  			}
  		}
  	}
}
</script>


<style scoped>
section {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.placar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-self: center;	
	align-content: center;
}

.casa {
	border-style: solid;
	border-width: 5px
}

.corvinal {

}

img {
	width: 150px;
	height: 150px;
	padding: 0 auto;
	margin: 0 auto
}

p{
	font-size: 2em
}
</style>   