import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const burger = document.querySelector('.burger');
const nav = document.querySelector('.first , .logout');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
	burger.classList.toggle('toggle');
});