export const state = () => ({
  user: null,
  auth: {},
  drawer: true,
  content: '',
  alertType: ''
})

export const mutations = {
  user(state, value) {
    state.user = value
  },
  auth(state, value) {
    state.auth = value
  },
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  setContent (state, { content, alertType,  timeout }) {
    state.content = content
    state.alertType = alertType

    if (typeof timeout === 'undefined') {
      timeout = 3000
    }

    setTimeout(() => (state.content = '', state.alertType = ''), timeout)
  }
}

export const getters = {
  check: state => !! state.user,
}
