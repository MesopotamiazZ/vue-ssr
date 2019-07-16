export default {
  updateCountAsync (store, payload) {
    setTimeout(() => {
      store.commit('updateCountAsync', payload.num)
    }, payload.time)
  }
}
