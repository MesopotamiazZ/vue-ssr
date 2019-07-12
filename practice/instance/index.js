import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="haha">{{text}}</div>',
  data: {
    text: 0
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)

console.log(app.$root)
console.log(app.$root === app)
console.log(app.$data)
console.log(app.$el)
console.log(app.$props)
console.log(app.$options)
console.log(app.$children)
console.log(app.$slots) // 插槽
console.log(app.$scopedSlots)
console.log(app.$refs.haha) // 如果是dom元素得到dom元素的,如果是组件得到组件的实例
console.log(app.$isServer) // 是否是服务端渲染

const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
}) // watch写在这个地方可以自己控制watch注销的时间

setTimeout(() => {
  unWatch()
}, 2000)

app.$on('test', () => {
  console.log('test emited')
})

app.$emit('test')

// app.$forceUpdate()

// app.$set()
// app.$delete()

app.$nextTick()
