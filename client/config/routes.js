import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    components: {
      default: Todo,
      a: Login
    },
    meta: { // 保存页面的信息
      title: 'this is app',
      description: '这个是主页面'
    },
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    name: 'login',
    path: '/login/:id/:name',
    props: true, // 组件中可以直接通过props为id拿到路由中传过去的id
    components: {
      default: Login,
      a: Todo
    },
    meta: { // 保存页面的信息
      title: 'this is login',
      description: '这个是登录页面'
    }
  }
]
