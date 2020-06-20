import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from '@/store'
import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('About.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(About, {
      store,
      vuetify,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should load title', () => {
    const title: any = wrapper.find('.about')
    expect(title.text()).toBe('This is an about page')
  })
})

