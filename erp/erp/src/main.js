//import './assets/main.css'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import App from './App.vue';
import SingleProduct from './views/SingleProduct.vue';
import ProductList from './views/ProductList.vue';
import ProductCategory from './views/ProductCategory.vue';
import MeasureUnit from './views/MeasureUnit.vue';
import PartnerList from './views/PartnerList.vue';
import SinglePartner from './views/SinglePartner.vue';
//import router from './router'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/products",
      component: ProductList,
    },
    {
      path: "/products/:id",
      name: "SingleProduct",
      component: SingleProduct,
      props: true,
    },
    {
      path: "/product-categories",
      component: ProductCategory,
    },
    {
      path: "/measureunits",
      component: MeasureUnit,
    },
    {
      path: "/partners",
      component: PartnerList,
    },
    {
      path: "/partners/:id",
      name: "SinglePartner",
      component: SinglePartner,
      props: true,
    },
  ],
});


const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
