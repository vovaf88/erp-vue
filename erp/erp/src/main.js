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
import BankList from './views/BankList.vue';
import SingleBank from './views/SingleBank.vue';
import MyBankAccountList from './views/MyBankAccountList.vue';
import SingleMyBankAccount from './views/SingleMyBankAccount.vue';
import PartnerBankAccountList from './views/PartnerBankAccountList.vue';
import SinglePartnerBankAccount from './views/SinglePartnerBankAccount.vue';
import BankCreate from './components/BankCreate.vue';
import ProductCreate from './components/ProductCreate.vue';
import Doc1List from './views/Doc1List.vue';  
import SingleDoc from './views/SingleDoc.vue';
import PurchaseDocList from './views/PurchaseDocList.vue';
import PurchaseSingleDoc from './views/PurchaseSingleDoc.vue';
//import router from './router'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/products",
      component: ProductList,
    },
    {
      path: "/products/create",
      name: "ProductCreate",
      component: ProductCreate,
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
    {
      path: "/banks",
      component: BankList,
    },
    {
      path: "/banks/create",
      name: "BankCreate",
      component: BankCreate,
    },
    {
      path: "/banks/:id",
      name: "SingleBank",
      component: SingleBank,
      props: true,
    },
    {
      path: "/mybankaccounts",
      component: MyBankAccountList,
    },
    {
      path: "/mybankaccounts/:id",
      name: "SingleMyBankAccount",
      component: SingleMyBankAccount,
      props: true,
    },
    {
      path: "/partnerbankaccounts",
      component: PartnerBankAccountList,
    },
    {
      path: "/partnerbankaccounts/:id",
      name: "SinglePartnerBankAccount",
      component: SinglePartnerBankAccount,
      props: true,
    },
    {
      path: "/purchase",
      name: "PurchaseDocList",
      component: PurchaseDocList,
    },
    {
      path: "/purchase/:id",
      name: "PurchaseSingleDoc",
      component: PurchaseSingleDoc,
      props: true,
    },
  ],
});


const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
