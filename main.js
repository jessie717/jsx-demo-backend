import app from './src/app/index.js'

app.listen(process.env.APP_PORT, () => {
  console.log('app is running on: ', process.env.APP_PORT)
})
