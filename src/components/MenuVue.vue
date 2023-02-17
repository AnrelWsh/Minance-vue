<template>
  <div class="respMenu">
    <div class="burger" @click="toggleNav">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <img id="respLogo" src="../../public/img/Logo.png" alt="Logo">
  </div>

  <div class="screen" @click="toggleNav"></div>

  <div id="menu" :class="{ 'nav-active': isNavOpen }">

      <img id="logo" src="../../public/img/Logo.png" alt="Logo">

      <div class="up">
        <UpSideComponent/>
      </div>
   
      <div class="mid" >
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

  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      this.display = "none";
    }
  },
  mounted(){
    const burger = document.querySelector('.burger');
    const screen = document.querySelector('.screen');
    const respMenu = document.querySelector('.respMenu');

    burger.addEventListener('click', () => {
      screen.style.display = 'block';
      burger.style.display = 'none';
      respMenu.style.transition = '0.5s ease-in';
    });

    screen.addEventListener('click', () => {
      screen.style.display = 'none';
      burger.style.display = 'block';
      respMenu.style.transition = '0.5s ease-in';
    });
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
.screen{
  display: none;
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
.respMenu{
  display: none;
}
.mid{
  transform: translateY(-150px);
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
.nav-active {
  display: none;
}

@media screen and (max-width: 1481px) {
  #menu{
    justify-content: flex-start;
    margin-right: 5vw;
  }
  .mid{
    margin-top: 10vw;
  }
}

@media screen and (max-width: 1024px) {
  #menu{
    display: none;
    margin: 0;
  }
  #logo{
    display: none;
  }
  .mid{
    transform: none;
  }
	.nav-active {
    z-index: 1;
		position: fixed;
    padding: 24px;
		top: 0;
    right: 0;
    overflow-y: auto;
		background-color: #2f3640;
		display: flex !important;
		flex-direction: column;
		align-items: center;
		transition: 0.5s ease-in;
	}
	.burger {
		display: block;
	}
  .up{
    display: flex;
    margin-bottom: 16px;
    width: 25vw;
  }
  .respMenu{
    display: flex;
    align-items: center;
    gap: 20px;
    transform: translateX(-100px);
    transform: translateY(+20px);
    transition: 0.5s ease-in;
  }

  .screen{
    width: 100vw;
    height: 100vh;
    background-color: #00000062;
    position: fixed;
  }
}
</style>
