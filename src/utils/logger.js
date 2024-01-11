import log4js from 'log4js'

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: {
      type: 'file',
      filename: 'src/logs/app.log',
      pattern: 'yyyy-MM-dd',
      maxLogSize: '10M',
      numBackups: 5,
      compress: true,
      // layout: {
      //   type: 'pattern',
      //   pattern: '%d [%p] %c - %m (%file:%method)%n'
      // }
    }
  },
  categories: {
    default: {
      appenders: ['out', 'app'],
      level: 'debug'
    }
  }
})

export default log4js
