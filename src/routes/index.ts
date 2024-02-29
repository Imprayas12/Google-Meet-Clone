import routes from "./routes";
import { createRouter, createWebHistory } from 'vue-router';

const Router = createRouter({routes, history: createWebHistory()});

export default Router;