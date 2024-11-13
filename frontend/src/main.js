import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHeart, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faSearch, faHeart, faShoppingCart, faChevronDown);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
