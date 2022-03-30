// export default function ({ store, route, redirect }) {
//
//   if (store.state.user) return Promise.resolve()
//
//   if (route.path === '/login') return Promise.resolve()
//
//   if (route.path.match(/^\/oauth\/.+\/callback$/)) return Promise.resolve()
//
//   window.location.href = '/login'
//   return new Promise((resolve) => {})
// }
