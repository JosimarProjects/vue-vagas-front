<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar vaga</button>
    <!-- <home></home>
     <publicar-vaga></publicar-vaga>-->
    <keep-alive>
      <component :is="conteudo"></component>
    </keep-alive>
  </div>

</template>

<script>
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga'

export default {
  name: 'Conteudo',
  components: {
    Home,
    PublicarVaga

  },
  data: () => ({
    teste: 'O componente foi criado',
    titulo: 'Componente conteudo',
    conteudo: 'home'
  }),
  methods: {
    atualizarComponente() {
      this.titulo += '*'

    }

  },
  /*  beforeCreate() {
      console.log('antes de criar')
    },
    created() {
      console.log('criado', this.teste)
    },
    beforeMount() {
      console.log('Antes de montar')
    },
    mounted() {
      console.log('Montado')
    },
    beforeUpdate() {
      console.log('antes de arualizado')
    },
    updated() {
      console.log('atualizado')
    },
    beforeUnmount() {
      console.log('antes de desmontar/destruir')
    },
    unmounted() {
      console.log('desmontado/destruido')
    },
    errorCaptured() {
      console.log('Erro capturado')
    },
    renderTraked() {
      console.log('re renderização rastreada')
    },
    renderTriggered(){
      console.log('re renderização acionada')
    },
    activated(){
      console.log('Componente é ativado')
    },
    deactivated() {
      console.log('Componente é desativado')
    }*/
}

</script>

<style>

</style>
