import Vue from "vue";
import "font-awesome/css/font-awesome.css";
import store from "./config/store";
import router from "./config/router";
import "./config/msgs";
import "./config/bootstrap";

import App from "./App";

Vue.config.productionTip = false;

// TEMPORARY
require("axios").defaults.headers.common["Authorization"] =
	"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZpbGlwZSBGZXJuYW5kZXMiLCJlbWFpbCI6ImZpbGlwZWZlcmliZWlyb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2MzM2NjExLCJleHAiOjE2NTY1OTU4MTF9.9o94BNivkz81m0y8YPJ85McnX2xtFWJ_cDFwESdSJwo";

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
