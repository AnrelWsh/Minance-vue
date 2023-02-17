<template>
  <div id="app">
    <MenuVue/>
    <div class="content">
      <CentralVue/>
      <SideVue/>
    </div>
    
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
  flex-direction: row;
  padding: 24px 13px 24px 16px;
}
.content{
  display: flex;
}

@media screen and (max-width: 1481px) {
  .content{
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1024px) {
  #app{
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: auto;
  }
}
</style>
