<script setup>
import { reactive } from 'vue';

const nome = "Franklin Fer"
const meuObj = {
  nome: "Frankin",
  cor: 'verde'
}

function dizOla(nome) {
  return `${nome} diz oi`; 
}

const EndMAtrixImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gREscH9YE1NYYVf0S-3YTGFJpKnzLF6JCQ&s"

const imagemMorpheus = "https://upload.wikimedia.org/wikipedia/en/a/ab/Morpheus.jpg"

const botaoEstaDesabilitado = false

const gostaDoNew = false
const gostaDoMorpheus = false

//let contador = 0

const estado = reactive({
  contador: 0,
  email: '',
  saldo: '5000',
  transferindo: '0',
  nomes: ['franklin', 'bernadetta', 'dominika'],
  nomeAInseriri: '',

  
})

function incrementar() {
  estado.contador++;
}
function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value; 
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorDeTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeAInseriri.length >= 3) {
    estado.nomes.push(estado.nomeAInseriri)
  } else {
    alert("Digite mais caracteres")
  } 
}


</script>

<template>
  <h1>{{dizOla("paula")}}</h1>
  <img v-if="gostaDoNew" :src="EndMAtrixImg" src="" alt="">
  <img v-else-if="gostaDoMorpheus" :src="imagemMorpheus" alt="">
  <h2 v-else>Nenhum dos dois</h2>
  
  <button :disabled="botaoEstaDesabilitado">Enviar</button>
  
  <br/>
  <hr/>
  
  {{ estado.contador }}
  
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>
  
  <br/>
  <hr/>
  
  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
  
  <br/>
  <hr/>
  
  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da trasnferencia: {{ mostraSaldoFuturo() }} <br>
  <input class="campo" :class="{ invalido: !validaValorDeTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value"  type="number" placeholder="Quantia para trasnferir">
  
  <button v-if="validaValorDeTransferencia()">Transferir</button>
  <span v-else> Valor maior que o saldo</span>
  
  <br/>
  <hr/>
  
  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  
  <input @keyup="evento => estado.nomeAInseriri = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadstrar nome</button>
</template>

<style scoped>
img {
  max-width: 200px;
}

.invalido{
  outline-color: red;
  border-color: red;  
}


</style>
