<template>
  <div class="card">
    <div class="card-header bg-dark text-white"> {{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Salário:R${{ salario }}| Modalidade: {{ getModalidade }}| Tipo: {{ getTipo }}| Publicação:
        {{ getPublicacao }} </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vaga',

  props: {
    titulo: {
      type: String,
      required: true,
      validator(p) {
        if (p.length < 6) return false
        return true
      }
    },

    descricao: {
      type: String,
      default: 'O contratante não adicionou o valor padrão para essa vaga!'
    },

    salario: {
      type: [Number, String],
      required: true

    },
    modalidade: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    publicacao: {
      type: String,
      required: true
    },

  },
  computed: {
    getTipo(){
      switch (this.tipo) {
        case '1': return 'CLT'
        case '2': return 'PJ'
      }
      return ''

    },
    getModalidade(){
      switch (this.modalidade) {
        case '1': return 'Home Office'
        case '2': return 'Presencial'
      }
      return ''

    },
    getPublicacao() {
      let dataPublicacao =  new Date(this.publicacao)
      //return dataPublicacao.toLocaleString('pt-BR')
      return dataPublicacao.toLocaleDateString('pt-BR')

    }
  }
}
</script>
