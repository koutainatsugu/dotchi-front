export default ({ store, app, $axios }) => {
  const session = app.$cookies.get('session')
  if (session) {
    store.commit('user', session.user)
    store.commit('auth', session.tokens)
  }
}
