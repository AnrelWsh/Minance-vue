<template>
  <div id="app">

  </div>
  <Menu/>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  background-color: #1E1E1E;
}

</style>
