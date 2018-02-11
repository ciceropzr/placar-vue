<template>
    <section>
        <div>
            <label>Insira o link da foto</label>
            <input v-model="foto">
            <label>Seu nome:</label>
            <input v-model="nomecracha">
            <div>
                <p>Escolha sua casa</p>
                <button v-on:click='grifinoria'>Grifinoria</button>
                <button v-on:click='sonserina'>Sonserina</button>
                <button v-on:click='lufalufa'>LufaLufa</button>
                <button v-on:click='corvinal'>Corvinal</button>
            </div>
        </div>
        <div class="cracha">
            <img :src="brasao" class="fundo">
            <div class="fotocracha">
                <img :src="foto">
            </div>
        </div>
    </section>
</template>

<script>
	export default {
	  name: 'CrachaG',
        data () {
            return {
                foto: '',
                nomecracha: '',
                casa: '',
                dercricao: '',
                brasao:''
            }
        },
        methods: {
            grifinoria (){
                return this.casa='Grifinoria',
                        this.descricao='Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado.',
                        this.brasao='http://odamoura.com/wp-content/uploads/2017/03/Grifin%C3%B3ria-1440x900.jpg'   
            },
            sonserina (){
                return this.casa='Sonserina',
                        this.descricao='Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado.'
            }
//            grifinoria (){
//                return this.casa='Grinoria',
//                        this.descricao='Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado.'
//            },
//            grifinoria (){
//                return this.casa='Grinoria',
//                        this.descricao='Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado.'
//            }
        }
	}
</script>

<style scoped>
    
    . {
        margin: 0;
        padding: 0            
    }
    
    .cracha {
        border: solid;
        margin-top: 5%;
        width: 40%;
        height: 30%;
        background-image: url()
        
    }
    
    .fundo{
        width: 100%;
        color: 
    }
</style>