<template>
  <div id="central">
    <div class="head">
      <h2>Hi, Rogers</h2>
      <input type="search" id="" placeholder="Search">
    </div>

  </div>
    
</template>

<script>

export default {
  name: 'MenuVue',
  components: {
  },
  
}
</script>

<style scoped>
input{
  padding: 15px 73px;
  background-image:url(../../public/img/icons/search.png);
  background-position:15px;
  left: 15px;
  background-repeat:no-repeat;
  border-radius: 15px;
  font-size: 25px;
  color: black;
}
.head{
  display: flex;
  align-items: center;
}
</style>
