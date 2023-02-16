<template>
  <div id="menu">
    <div class="first">
      <img id="logo" src="../../public/img/Logo.png" alt="Logo">
   
        <div class="mid">
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
        </div>
      </div> 

      <div class="logout">
        <img src="../../public/img/icons/logout.png" alt="Menu Button Logout">
        <p>Log Out</p>
      </div>
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
  justify-content: space-between;
}
#logo{
  margin-bottom: 76px;
}
.dash{
  padding: 10px 29px;
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 25px;
  background: linear-gradient(266.37deg, #FAFF00 -5.82%, #FAFF00 15.95%, #1970D6 41.2%, #6C1182 72.88%);
  border-radius: 17px;
  margin-bottom: 32px;
}
.btns{
  display: flex;
  flex-direction: column;
  margin-left: 24px;
}
.logout {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
}
.logout p{
  font-family: "Inter";
  font-size: 25px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0.8;
}
</style>
