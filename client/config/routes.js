// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
// 改成路由异步加载以后会报一个Unexpected token错误,
// 需要暗转一个插件babel-plugin-syntax-dynamic-import
// 并且在.babelrc文件加一个配置"syntax-dynamic-import"
const Todo = () =>
  import('../views/todo/todo.vue')
const Login = () =>
  import('../views/login/login.vue')

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    component: Todo,
    meta: { // 保存页面的信息
      title: 'this is app',
      description: '这个是主页面'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
    // beforeEnter: (to, from, next) => {
    //   console.log('app route before enter')
    //   next()
    // }
  },
  {
    name: 'login',
    // path: '/login/:id/:name',
    path: '/login',
    // props: true, // 组件中可以直接通过props为id拿到路由中传过去的id
    // components: {
    //   default: Login,
    //   a: Todo
    // },
    component: Login,
    meta: { // 保存页面的信息
      title: 'this is login',
      description: '这个是登录页面'
    }
  }
]
