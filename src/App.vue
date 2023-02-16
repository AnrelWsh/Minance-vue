<template>
  <div id="app">
    <MenuVue/>
    <CentralVue/>
    <SideVue/>
  </div>
</template>

<script>
import MenuVue from './components/MenuVue.vue'
import CentralVue from './components/CentralVue.vue'
import SideVue from './components/SideVue.vue'

export default {
  name: 'App',
  components: {
    MenuVue,
    CentralVue,
    SideVue,
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
  display: flex;
  padding: 24px 13px 24px 16px;
}

</style>
