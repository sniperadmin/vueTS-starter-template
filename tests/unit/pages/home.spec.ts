import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from '@/store'
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('Home.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      store,
      vuetify,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should load title', () => {
    const image: any = wrapper.find('img')
    expect(image.exists()).toBe(true)
  })
})
