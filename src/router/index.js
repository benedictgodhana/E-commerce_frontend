import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LoginPage from '../views/LoginPage.vue'

import Community from '../views/CommunityPage.vue'
import Calendar from '../views/CalendarPage.vue'

import DocumentPage from '@/components/DocumentPage.vue'; // Import your document page component


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{auth:false}
    },

    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta:{auth:false}
    },
    {
      path: '/calendar_events',
      name: 'calendar',
      component: Calendar,
      meta:{auth:false}
    },
    {
      path: '/organization',
      name: 'organization',
      component: Community,
      meta:{auth:false}
    },
    {
      path: '/documents',
      name: 'documents',
      component: About,
      meta:{auth:false}
    },

    {
      path: '/documents/:categoryId',
      name: 'DocumentPage',
      component: DocumentPage,
      props: true // Allow route params to be passed as props to the component
    },
   
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
