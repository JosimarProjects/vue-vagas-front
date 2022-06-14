<template>
  <div class="card">
    <div class="card-header bg-dark text-white"> {{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Salário:R$6.000,00 | Modalidade: Home Office | Tipo: CLT| Data:10/11/2021 </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vaga',
  props: [
   "titulo",
    "descricao",
    "salario",
    "modalidade",
    "tipo",
    "publicacao"
  ]
}
</script>
