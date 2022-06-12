<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
      <indicador titulo="Vagas abertas" indicador="100"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="225"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Visitantes online" indicador="25"></indicador>
      </div>
    </div>

  </div>


</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Indicador from "@/components/comuns/Indicador";
export default {
  name: 'Home',
  components: {
    PesquisarVaga,
    Indicador
  },
  activated() {
    console.log('Componente é ativado')
  },
  deactivated() {
    console.log('Componente é desativado')
  },
  beforeUnmount() {
    console.log('antes de desmontar/destruir')
  },
  unmounted() {
    console.log('desmontado/destruido')
  },
  created() {
    console.log('criado', this.teste)
  },
}

</script>

<style>

</style>
