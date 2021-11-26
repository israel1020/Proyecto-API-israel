<template>
  <div id="app">
    <Menu/>  
    <router-view></router-view>  
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

