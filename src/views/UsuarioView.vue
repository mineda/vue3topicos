<template>
  <div>
    <h1>Welcome {{ nome }}</h1>
    <input type="text" :value="nome" @input="mudouTexto"/>
    <input type="password" v-model="senha"/>
    <p v-if="nome.length > 10">Nome longo!</p>
    <p v-else>Nome curto!</p>
    <button @click="novoUsuario">Cadastrar</button>
    <button @click="buscarUsuarios">Atualizar</button>
    <p v-if="erro">{{ erro }}</p>
    <CustomTable :usuarios="usuarios"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '@/components/CustomTable.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { usuarioStore} from '../stores/usuarioStore';

const store = usuarioStore();
const nome = ref("teste");
const senha = ref("senha");
const erro = ref("");
const usuarios = ref([ {id:1, nome: "Geraldo"}, {id: 2, nome: "Cláudia"}]);

async function buscarUsuarios() {
  try {
    usuarios.value = (await axios.get('usuario')).data;
  }
  catch(e) {
    erro.value = (e as Error).message;
  }
}

async function novoUsuario() {
  try {
    usuarios.value.push((await axios.post('usuario', { nome: nome.value, senha: senha.value })).data);  
  }
  catch(e) {
    erro.value = (e as Error).message;
  }
}

function mudouTexto(e: any) {
  nome.value = e.target.value;
}

onMounted(() => {
  buscarUsuarios();
});

</script>