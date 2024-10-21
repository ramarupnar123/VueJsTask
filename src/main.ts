// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import store from "./stores/index"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// import App from './App.vue'
// import router from './router'

// // const app = createApp(App)

// // app.use(createPinia())
// // app.use(router)

// // app.mount('#app')
// import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';


// createApp(App).use(store).use(Toast).mount('#app');


import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import store from './stores/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue';
import router from './router';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);


app.use(createPinia());
app.use(router);
app.use(store);
app.use(Toast);


app.mount('#app');

