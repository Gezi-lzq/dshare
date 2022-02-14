// 该文件用于创建Vuex中最核心的store
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 应用Vuex插件
Vue.use(Vuex);

import actions from "./actions";
import mutations from "./mutations";


// 准备state--用于储存数据
const state = {
  account: "0x0000000000000",
  dshare: null,
  shares: [],
  sharesCount: 0,
};

//准备getters——用于将state中的数据进行加工
const getters = {
    
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
