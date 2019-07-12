import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'notActive'}}
      <p>{{html}}</p>
      <p
        v-html="html"
        v-bind:id="id"
        v-bind:class="{ active: !isActive }"
        v-on:click="handleClick"></p>
        <p>{{textArr}}</p>
        <p v-for="a in arr" :key="a">{{a}}</p>
    </div>
  `,
  data: {
    isActive: false,
    html: '<span>hello</span>',
    id: 'mian',
    arr: [1, 2, 3]
  },
  computed: {
    textArr () {
      return this.arr.join(' ')
    }
  },
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  }
})

app.$mount('#root')
