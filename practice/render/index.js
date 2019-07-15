import Vue from 'vue'

const componentA = {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  render (createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => {
          this.$emit('click')
        }
      }
    }, [
      this.$slots.header,
      this.name
    ])
  }
}

const app = new Vue({
  // el: '#root',
  components: {
    ComA: componentA
  },
  data: {
    text: 'hello',
    name: 'wzd'
  },
  render (createElement) {
    return createElement('div', {
      attrs: {
        id: 'main'
      }
    }, [
      createElement('ComA', {
        ref: 'comARef',
        props: {
          name: ' ' + this.name
        },
        // nativeOn: {
        //   click: this.handleClick
        // }
        on: {
          click: this.handleClick
        }
        // slot: 'header'
      }, [
        createElement('span', {
          slot: 'header'
        }, this.text)
      ])
    ])
  },
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  }
})

app.$mount('#root')
