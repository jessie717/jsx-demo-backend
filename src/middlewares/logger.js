import log4js from '../utils/logger.js'

const logger = log4js.getLogger()

const log = async (ctx, next) => {
  const platform = ctx.header['user-agent']
  const start = new Date()
  await next()
  const ms = new Date() - start
  logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms --> ${platform}`)
}

export default log
