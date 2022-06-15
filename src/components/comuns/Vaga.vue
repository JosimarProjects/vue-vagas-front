<template>
  <div class="card">
    <div class="card-header bg-dark text-white"> {{ tituloVaga }}</div>
    <div class="card-body">
      <p>{{ descricaoVaga }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Salário:R${{ salario }}| Modalidade: {{ modalidade }}| Tipo: {{ tipo }}| Publicação:
        {{ publicacao }} </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vaga',

  props: {
    tituloVaga: {
      type: String,
      required: true,
      validator(p) {
        if (p.length < 6) return false
        return true
      }
    },

    descricaoVaga: {
      type: String,
      required: true
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

  }
}
</script>
