import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Projects from '@/views/Projects';
import Contact from '@/views/Contact';

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/projects',
        name: 'projects',
        component: Projects
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }
    ]
});