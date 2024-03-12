<template>
  <div>
    <h1>Welcome {{ nome }}</h1>
    <input type="text" :value="nome" @input="mudouTexto"/>
    <p v-if="nome.length > 10">Nome longo!</p>
    <p v-else>Nome curto!</p>
    <CustomTable :usuarios="usuarios"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '@/components/CustomTable.vue';

const nome = ref("teste");
const usuarios = ref([ {id:1, nome: "Geraldo"}, {id: 2, nome: "Cláudia"}]);

function mudouTexto(e: any) {
  nome.value = e.target.value;
}

</script>