// const ejs = require('ejs')

// module.exports = async (ctx, renderer, template) => {
//   ctx.headers['Content-type'] = 'text/html'

//   const context = {url: ctx.path}

//   try {
//     const appString = await renderer.renderToString(context)

//     const html = ejs.render(template, {
//       appString,
//       style: context.renderStyles(),
//       scripts: context.renderScripts()
//     })

//     ctx.body = html
//   } catch (err) {
//     console.log('render error', err)
//   }
// }

const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Tpye'] = 'text/html'

  const context = { url: ctx.path }
  try {
    const appString = await renderer.renderToString(context)

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })
    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
