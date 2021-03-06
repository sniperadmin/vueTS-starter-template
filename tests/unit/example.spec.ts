import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from '@/store'
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('HelloWorld.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      store,
      vuetify,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should be vue', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

});
