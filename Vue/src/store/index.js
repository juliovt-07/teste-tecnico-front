// src/store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isModalOpen: false,
      modalData: null
    }
  },
  mutations: {
    openModal(state, payload) {
      state.modalData = payload
      state.isModalOpen = true
    },
    closeModal(state) {
      state.isModalOpen = false
    }
  },
  actions: {
    openModal({ commit }, payload) {
      commit('openModal', payload)
    },
    closeModal({ commit }) {
      commit('closeModal')
    }
  },
  getters: {
    isModalOpen: (state) => state.isModalOpen,
    modalData: state => state.modalData
  }
})

export default store
