<template>
  <div id="app">

    <MenuVue/>
    <CentralVue/>
  </div>
</template>

<script>
import MenuVue from './components/MenuVue.vue'
import CentralVue from './components/CentralVue.vue'

export default {
  name: 'App',
  components: {
    MenuVue,
    CentralVue,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
}
#app{
  background-color: #1E1E1E;
}

</style>
