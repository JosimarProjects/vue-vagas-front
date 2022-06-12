<template>
  <div>
    <topo-padrao></topo-padrao>
    <!--<button @click="desmontarComponente()">Desmontar o componente conteudo</button>-->
    <conteudo v-if="visibility"></conteudo>
  </div>
</template>

<script>


import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'


export default {
  name: 'App',
  data: () => ({
    visibility: true
  }),
  methods: {
    desmontarComponente() {
      this.visibility = false

    }
  },
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style module>

</style>
