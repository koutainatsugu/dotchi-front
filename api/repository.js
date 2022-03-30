export default $axios => resource => ({
  index({ query }) {
    return $axios.$get(`/${resource}`, { params: query });
  },
  create(payload) {
    return $axios.$post(`/${resource}`, payload);
  },
  show(id) {
    return $axios.$get(`/${resource}/${id}`);
  },
  update(id, payload) {
    return $axios.$put(`/${resource}/${id}`, payload);
  },
  delete(id) {
    return $axios.$delete(`/${resource}/${id}`);
  },
  // search({ query }) { // ←追加
  //   return $axios.$get(`/${resource}/search`, { params: query });
  // },
});

//
// 例
// const res = await this.$repositories.users.search({
//   query: {
//     q: 'sufu'
//   }
// })
