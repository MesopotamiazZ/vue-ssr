export default {
  updateCount (state, num) {
    state.count = num
  },
  updateCountAsync (state, payload) {
    state.count = payload
  }
}
