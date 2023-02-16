<template>
  <div id="side">
    <div class="up">
      <img src="../../public/img/icons/notif.png" alt="Notif icon">
      <img src="../../public/img/icons/profil.png" alt="Profil Icon">
    </div>

    <div class="recent">
      <h2>Recent Transactions </h2>
      <div class="recentComponents">
        <RecentTransactionComponent/>
      </div>
    </div>
  </div>
    
</template>

<script>
import RecentTransactionComponent from './RecentTransactionComponent.vue';

export default {
  name: 'SideVue',
  components: {
    RecentTransactionComponent
  },
  
}
</script>

<style scoped>

</style>
