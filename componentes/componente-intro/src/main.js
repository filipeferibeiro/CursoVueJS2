import Vue from "vue";
import App from "./App.vue";
import ContadoresComp from "./components/ContadoresComp.vue";

Vue.config.productionTip = false;
Vue.component("app-contadores", ContadoresComp);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
