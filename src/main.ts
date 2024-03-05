import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { config } from '../src/helpers/firebaseConfig';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Router from './routes/index'




const app = initializeApp(config);
const auth = getAuth();


setPersistence(auth, browserLocalPersistence);
app.automaticDataCollectionEnabled = true;




const pinia = createPinia();
createApp(App).use(Router).use(pinia).mount('#app');

