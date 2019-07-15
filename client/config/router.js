import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // 除去访问地址中的#号,利于SEO
    base: '/base/',
    scrollBehavior (to, from, savedPosition) {
      // 如果页面可以向下滚动,可以记住当前滚动位置
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })
}
