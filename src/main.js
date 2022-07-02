import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt";
//criar instancia do pacote mitt

const emitter = mitt()
//iniciar instancia vue
const app = createApp(App)
//configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter
//associar a instancia do vue com o elemento html

app.mount('#app')

//createApp(App).mount('#app')
