import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Pinstagram',
        href: '#!',
      },
      {
        text: 'Login',
        href: '#!',
      },
      {
        text: 'Signin',
        href: '#about',
      },
      {
        text: 'images',
        href: '#about',
      },
    ],
    user_idx : 0,
  },
  getters: {
    categories: state => {
      const categories = []
      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})