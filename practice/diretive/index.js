import Vue from 'vue'

const app = new Vue({
  template: `
    <div>
      <p v-text="number"></p>
      <p v-html="html"></p>
      <p v-show="active">v-show</p>
      <p v-if="active">v-if</p>
      <p v-else-if="number === 0">else if</p>
      <p v-else>v-else</p>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(item, key, index) in obj">{{item}}:{{key}}:{{index}}</li>
      </ul>
      <div>
        <input type="checkbox" v-model="checked"/>
      </div>
      <div>
        <input type="checkbox" :value="1" v-model="arr"/>
        <input type="checkbox" :value="2" v-model="arr"/>
        <input type="checkbox" :value="3" v-model="arr"/>
      </div>
      <div>
        <input type="radio" value="one" v-model="picked"/>
        <input type="radio" value="two" v-model="picked"/>
      </div>
    </div>
  `,
  data: {
    number: 0,
    html: '<span>this is html</span>',
    active: false,
    arr: [1, 2, 3],
    obj: {
      a: 1,
      b: 2,
      c: 3
    },
    checked: true,
    picked: ''
  }
})

app.$mount('#root')
