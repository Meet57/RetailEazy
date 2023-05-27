import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/home/HomeView.vue'
import CustomerDetails from '../components/customer/CustomerDetails.vue'
import StockDetails from '../components/inventory/StockDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer-details',
      name: 'customer-details',
      component: CustomerDetails
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: StockDetails
    }
  ]
})

export default router
