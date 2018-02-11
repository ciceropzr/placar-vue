<template>
    <main>
        <section>
            <div class="avatar">
                <img :src="usuario1.brasao">
                <h1>{{usuario1.nome}}</h1>    
            </div>
            <div>
                <p>{{usuario1.descricao}}</p>
                <p class="famosos">Membros Famosos</p>
                <ul v-for="participantes in usuario1.membros">
                    <li>{{participantes}}</li>
                </ul>
                <label>
                    Nomes:
                    <input v-model="membro" v-on:keyup.enter="addnome">
                </label>
            </div>
        </section>
    </main>
</template>
<script>
    export default {
        name:'Perfil',
        data  () {
            return {
                membro:'',
                usuario1: {
                    brasao: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/G_final_%281%29.jpg/revision/latest?cb=20121116012731&path-prefix=pt-br',
                    nome:'Grifinoria',
                    descricao: 'Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado.',
                    membros: [
                        'Harry Pother',
                        'Alvo Dumbledore'
                    ]
                }
            }
        },
        methods: {
            addnome(membro) {
                return this.usuario1.membros.push(this.membro),
                        this.membro= ''
            }
        }
        
    }
</script>

<style scoped>
    . {
        margin: 0;
        padding: 0;
    }
    
    section {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 50%;
        border: ridge;
        border-width: thin;
        border-color: aqua
    }
    
    li {
        list-style: none
    }
    
    .famosos {
        text-align: center
    }
</style>