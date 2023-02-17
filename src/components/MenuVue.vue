<template>
  <div id="menu">
    <div class="burger">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
    <div class="first">
      <img id="logo" src="../../public/img/Logo.png" alt="Logo">

      <div class="up">
        <UpSideComponent/>
      </div>
   
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
import UpSideComponent from './UpSideComponent.vue';
import MenuBtnComponent from "./MenuBtnComponent.vue"

export default {
  name: 'MenuVue',
  components: {
    MenuBtnComponent,
    UpSideComponent
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
.up{
  display: none;
}


.burger {
	display: none;
	cursor: pointer;
}
.burger .line {
	width: 25px;
	height: 3px;
	background-color: #fff;
	margin: 5px;
}
@media screen and (max-width: 1024px) {
	.first, .logout {
		position: fixed;
		right: 0px;
		height: 92vh;
		top: 8vh;
		background-color: #2f3640;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		transform: translateX(100%);
		transition: transform 0.5s ease-in;
	}
	.burger {
		display: block;
	}
  .up{
    display: flex;
  }
}
</style>
