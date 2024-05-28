<template>
  <div>
    <h1>Welcome {{ nome }}</h1>
    <input type="text" v-model="nome"/>
    <input type="password" v-model="senha"/>
    <button @click="login">Login</button>
    <p v-if="store.erro">{{ store.erro }}</p>
    <p>Token: {{ store.token }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { usuarioStore} from '../stores/usuarioStore';

const nome = ref("teste");
const senha = ref("senha");
const store = usuarioStore();

async function login() {
  store.login(nome.value, senha.value);
}



</script>