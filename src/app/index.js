import Koa from 'koa'
import cors from 'koa2-cors'
import { koaBody } from 'koa-body'

import '../config/index.js'
import router from '../routes/index.js'

const app = new Koa()

app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())

const errorHandler = (err, ctx) => {
  ctx.status = err.code
  ctx.body = err
}

// 异常监听
app.on('error', errorHandler)

export default app
