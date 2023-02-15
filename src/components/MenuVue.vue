<template>
  <div id="menu">
    <img id="logo" src="../../public/img/Logo.png" alt="Logo">
    <div class="dash">
      <img src="../../public/img/icons/dashboard.png" alt="dashboard">
      <p>Dashboard</p>
    </div>
    <div class="btns">
      <MenuBtnComponent imageUrl="img/icons/invoices.png" btnText="Invoices"/>
      <MenuBtnComponent imageUrl="img/icons/clients.png" btnText="Clients"/>
      <MenuBtnComponent imageUrl="img/icons/products.png" btnText="Products"/>
      <MenuBtnComponent imageUrl="img/icons/messages.png" btnText="Messages"/>
      <MenuBtnComponent imageUrl="img/icons/settings.png" btnText="Settings"/>
      <MenuBtnComponent imageUrl="img/icons/help.png" btnText="Help"/>
    </div>
    
    <MenuBtnComponent class="logout" imageUrl="img/icons/logout.png" btnText="Logout"/>
    

  </div>
    
</template>

<script>
import MenuBtnComponent from "./MenuBtnComponent.vue"

export default {
  name: 'MenuVue',
  components: {
    MenuBtnComponent
  },
  
}
</script>

<style scoped>
#menu{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#logo{
  padding: 48px 0 0 53px;
}
.dash{
  padding: 10px 29px;
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 25px;
  background: linear-gradient(266.37deg, #FAFF00 -5.82%, #FAFF00 15.95%, #1970D6 41.2%, #6C1182 72.88%);
  border-radius: 17px;
}
.btns{
  display: flex;
  flex-direction: column;
}
.logout{
  color: #FAFF00;
  font-weight: 400;
}
</style>
