import { queryUsers, queryUserByName, login, register } from '../service/user.js'

const getUsers = async (ctx, next) => {
  try {
    const data = await queryUsers()
    ctx.body = {
      code: 200,
      message: 'successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 404,
      message: error
    }
  }
}
const getUserByName = async (ctx, next) => {
  try {
    const { username } = ctx.params
    const data = await queryUserByName(username)
    ctx.body = {
      code: 200,
      message: 'successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 404,
      message: error
    }
  }
}

const userLogin = async (ctx, next) => {
  try {
    const { username, password } = ctx.request.query
    const data = await login({ username, password })
    ctx.body = {
      code: 200,
      message: 'successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 404,
      message: error
    }
  }
}
const userRegister = async (ctx, next) => {
  try {
    const { username, password } = ctx.request.query
    const data = await register({ username, password })
    ctx.body = {
      code: 200,
      message: 'successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 404,
      message: error
    }
  }
}

export { getUsers, getUserByName, userLogin, userRegister }
