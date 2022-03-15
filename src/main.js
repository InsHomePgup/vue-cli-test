/*
 * @Author: InsHomePgup
 * @Date: 2022-03-02 14:22:15
 * @LastEditors: InsHomePgup
 * @LastEditTime: 2022-03-15 09:11:45
 * @FilePath: \vue-cli-test\src\main.js
 * @Description:
 *
 *
 */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store';
Vue.use(Vuex);
Vue.use(VueRouter);
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;
new Vue({
    render: (h) => h(App),
    store
}).$mount('#app');
