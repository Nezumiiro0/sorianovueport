import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Import router configuration

const app = createApp(App);

app.use(createPinia()); // Add Pinia for state management
app.use(router);        // Use Vue Router for navigation

app.mount('#app');      // Mount the app to the DOM
