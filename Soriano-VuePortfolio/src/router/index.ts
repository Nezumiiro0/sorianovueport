import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Showcase from '@/views/Showcase.vue';
import Creative from '@/views/Creative.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root URL to /login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase,
  },
  {
    path: '/creative',
    name: 'Creative',
    component: Creative,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
