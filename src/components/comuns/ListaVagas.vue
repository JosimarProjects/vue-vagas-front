<template>
  <slot name="titulo" :dadosTitulo="{titulo: 'Titulo lista', nroVagas: 15}">
    <p>Titulo da lista de vagas</p>
  </slot>
  <slot
      :vagas="vagas"
  >
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <Vaga v-bind="vaga"/>
      </div>
    </div>
  </slot>
<slot name="rodape" :dadosRodape="{titulo: 'Rodapé lista', paginacao: {nroPaginas: 10, paginaAtiva:2 }}">
<p>rodapé do componente</p>

</slot>

</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue"

export default {
  name: 'listaVagas',
  components: {Vaga},
  data: () => ({
    vagas: []
  }),
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  },
  mounted() {
    this.emitter.on('filtrarVagas', vaga => {
      const vagas = JSON.parse(localStorage.getItem('vagas'))
      this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
    })

  }


}
</script>
