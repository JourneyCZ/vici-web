const base = {
  state: () => ({
    theme: 'light'
  }),
  mutations: {
    setTheme (state, theme) {
      state.theme = theme
    }
  },
  getters: {
    getTheme (state) {
      return state.theme
    }
  },
}

export default base