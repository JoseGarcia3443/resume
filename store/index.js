export const state = () => ({
  scrollEvent: false,
  scrollToTarget: null
})

export const mutations = {
  SET_TARGET(state, payload) {
    state.scrollEvent = !state.scrollEvent
    state.scrollToTarget = payload
  }
}

export const actions = {
  setTarget({ commit }, payload) {
    commit('SET_TARGET', payload)
  }
}

export const getters = {
  scrollEvent: (state) => state.scrollEvent,
  scrollToTarget: (state) => state.scrollToTarget
}
