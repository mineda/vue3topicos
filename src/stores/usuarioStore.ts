import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usuarioStore = defineStore('usuario', () => {
  const nome = ref("");
  const token = ref("");
  const data = ref();
  const erro = ref("");

  async function login(nomeUsuario: string, senha: string) {
    try {
      data.value = (await axios.post('login', { username: nomeUsuario, password: senha })).data;  
      nome.value = nomeUsuario;
      token.value = data.value.token;
    }
    catch(e) {
      erro.value = (e as Error).message;
    }
  }

  return { nome, token, erro, login }
})
