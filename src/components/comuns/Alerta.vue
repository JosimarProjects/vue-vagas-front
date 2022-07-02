<template>
  <div class="alert alert-success" role="alert">
    <slot name="titulo">
      <h3>Titulo da mensagem de feedback</h3>
    </slot>
    <hr>
    <slot>
      <p>Mensagem de feedback</p>
    </slot>

  </div>
</template>

<Script>
export default {
  name: 'Alerta'
}
</Script>
