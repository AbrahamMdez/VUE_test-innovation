import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, payload) {
      state.people = payload;    }
  },
  actions: {
    async getPeople({ commit }) {
      try {
        const res = await fetch('https://swapi.dev/api/people/')
        const data = await res.json();
        console.log(data)
        commit('setPeople', data.results)
        
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
