import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'hello'
  },
  beforeCreate () {
    console.log('beforeCreate', this.$el)
  },
  created () {
    console.log('created', this.$el)
  },
  beforeMount () {
    console.log('beforeMount', this.$el)
  },
  mounted () {
    console.log('mounted', this.$el)
  },
  beforeUpdate () {
    console.log('beforeUpdate', this.$el)
  },
  updated () {
    console.log('updated', this.$el)
  },
  activated () {
    console.log('activated', this)
  },
  deactivated () {
    console.log('deactivated', this)
  },
  beforeDestroy () {
    console.log('beforeDestroy', this)
  },
  destroyed () {
    console.log('destroyed', this)
  }
})

app.$mount('#root')

app.$data.text = 'hello man!' // 数据更新beforeUpdate和updated执行

setTimeout(() => {
  app.$destroy()
}, 5000)
