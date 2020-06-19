/**
 * @module (customModules)
 * this will import custom modules
 */
// import { moduleName1, moduleName2 } from './modules'

// importing vue, vuex, .....
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

/** importing plugins (if needed)
 * @package => VuexPersistence
 * @requires (VuexPersistence)
 */


Vue.use(Vuex);

export const store: Store<any> = new Vuex.Store<any>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
