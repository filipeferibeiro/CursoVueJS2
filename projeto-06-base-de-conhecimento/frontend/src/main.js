import Vue from "vue";
import "font-awesome/css/font-awesome.css";
import store from "./config/store";
import router from "./config/router";
import "./config/msgs";
import "./config/bootstrap";
import "./config/axios";
import "./config/mq";

import App from "./App";

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
