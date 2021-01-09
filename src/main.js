import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from "vue-router";
import vuetify from '@/plugins/vuetify';

Vue.use(VueRouter);

const routes = [
  {
    path: "/portfolio",
    component: () => import("@/components/home/Home.vue"),
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
