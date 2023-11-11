// 引入Sequelize
import { Sequelize } from 'sequelize'

const { DB_NAME, DB_USER, DB_PWD, DB_HOST } = process.env

// 实例化Sequelize，连接到数据库
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: 'mysql' // 选择您使用的数据库类型
  // 其他数据库连接配置
})

export default sequelize
