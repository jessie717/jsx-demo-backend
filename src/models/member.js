import { DataTypes } from 'sequelize'

import sequelize from './index.js'

// 定义模型
const Member = sequelize.define('member', {
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birth: {
    type: DataTypes.STRING,
    allowNull: true
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: true
  },
  workplace: {
    type: DataTypes.STRING,
    allowNull: true
  },
  information: {
    type: DataTypes.STRING,
    allowNull: true
  },
  wish: {
    type: DataTypes.STRING,
    allowNull: true
  },
  age: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

// 同步模型到数据库
await sequelize.sync()

export default Member
