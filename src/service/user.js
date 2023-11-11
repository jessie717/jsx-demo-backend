import User from '../models/user.js'

const queryUsers = async () => {
  const users = await User.findAll({
    attributes: ['uid', 'username', 'token'] // 返回指定字段
  })
  if (users) {
    return users
  }
  return null
}
const queryUserByName = async (username) => {
  console.log('username ---->', username)
  const user = await User.findOne({
    where: { username },
    attributes: ['uid', 'username', 'token']
  })
  if (user) {
    return user
  }
  return null
}
const login = async ({ username, password }) => {
  // TODO:
}
const register = async ({ username, password }) => {
  // TODO:
}

export { queryUsers, queryUserByName, login, register }
