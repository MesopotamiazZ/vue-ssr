import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>name: {{name}}</p>
      <p>name: {{getName()}}</p>
      <p>number: {{number}}</p>
      <p>number:<input type="text" v-model="number"/></p>
      <p>firstName:<input type="text" v-model="firstName"/></p>
      <p>lastName<input type="text" v-model="lastName"/></p>
      <p>obj.a<input type="text" v-model="obj.a"/></p>
      <p>obj.b<input type="text" v-model="obj.b"/></p>
      <p></p>
    </div>
  `,
  data: {
    firstName: 'Troy',
    lastName: 'wang',
    number: 0,
    obj: {
      a: '123',
      b: '345'
    }
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    obj: {
      handler (newData, oldData) {
        console.log('obj changed', newData, oldData)
      },
      // immediate: true, // 为false不会在第一次渲染的时候执行
      deep: true
    },
    'obj.b': {
      handler (newData, oldData) {
        console.log('obj.b changed', newData, oldData)
      },
      immediate: true // 为false不会在第一次渲染的时候执行
      // deep: true // 此种方式可以不用添加deep,并且提高性能
    }
  },
  methods: {
    getName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
