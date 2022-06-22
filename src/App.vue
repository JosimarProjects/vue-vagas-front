<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar=" componente = $event"></topo-padrao>
    <conteudo v-if="visibility" :conteudo="componente"></conteudo>
  </div>
</template>

<script>


import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from "@/components/comuns/VagasFavoritas";



export default {
  name: 'App',
  data: () => ({
    visibility: true,
    componente: "Home"

  }),

  components: {
    VagasFavoritas,
    Conteudo,
    TopoPadrao
  }
}
</script>

<style module>

</style>
