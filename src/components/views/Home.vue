<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <br>
    <lista-vagas>
      <!--
      <template v-slot:titulo="slotProps">
        {{ slotProps }}
        <hr>

      </template>

      <template v-slot:default="slotProps">
        {{ slotProps.vagas }}
        <hr>

      </template>

      <template v-slot:rodape="slotProps">
        {{ slotProps }}
        <hr>
      </template>
-->
    </lista-vagas>


    <div class="row mt-5">
      <div class="col-4">
        <indicador
            titulo="Vagas abertas"
            indicador="100"
            bg="bg-dark"
            color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
            titulo="Profissionais cadastrados"
            indicador="100"
            bg="bg-dark"
            color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
            titulo="Visitantes online"
            :indicador="usuariosOnline"
            bg="bg-light"
            color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Indicador from "@/components/comuns/Indicador";
import listaVagas from "@/components/comuns/ListaVagas";

export default {
  name: 'Home',
  components: {
    PesquisarVaga,
    Indicador,
    listaVagas
  },
  data: () => ({
    usuariosOnline: 0,

  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101)
    }
  },

  created() {
    setInterval(this.getUsuariosOnline, 10000)
  }

}

</script>

<style>

</style>
