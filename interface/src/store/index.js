import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.js";

// State management in vue
Vue.use(Vuex);

export default new Vuex.Store({
    // defined module used
    modules: {
        user
    },
});