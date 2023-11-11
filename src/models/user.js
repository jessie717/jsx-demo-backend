import { DataTypes } from 'sequelize'

import sequelize from './index.js'

// 定义模型
const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// 同步模型到数据库
await sequelize.sync()
console.log('数据库模型已同步')

export default User
