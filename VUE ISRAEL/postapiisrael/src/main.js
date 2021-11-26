import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Cantantes from './components/cantantes/Cantantes.vue'
import InsertarCantante from './components/cantantes/InsertarCantante.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:"/cantantes", component: Cantantes},
  {path:"/insertar", component:InsertarCantante}
]

const router = new VueRouter({
  routes, 
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
