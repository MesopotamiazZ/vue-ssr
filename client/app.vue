<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{count}}</p>
    <p>{{fullName}}</p>
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <Todo></Todo> -->
    <!-- 加入vue-router以后更改 -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
// import Todo from './views/todo/todo.vue'
import Footer from './layout/footer.jsx'
// import { setInterval } from 'timers'

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  // mounted () {
  //   // console.log(this.$store)
  //   // let i = 1
  //   // setInterval(() => {
  //   //   this.$store.commit('updateCount', i++)
  //   // }, 1000)
  //   this.updateCountAsync({
  //     num: 5,
  //     time: 2000
  //   })
  // },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    // 可以改写成下面的写法
    ...mapState(['count']),
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // getters可以改写成下面的写法
    ...mapGetters(['fullName'])
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.6;
  z-index: -1;
}
</style>
