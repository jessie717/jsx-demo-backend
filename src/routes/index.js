import Router from 'koa-router'
import memberRouter from './member.js'
import userRouter from './user.js'
import bffRouter from './bff.js'

const router = new Router()
// 注册所有路由
router.use('/member', memberRouter.routes()) // member模块
router.use('/user', userRouter.routes()) // user模块
router.use('/bff', bffRouter.routes()) // user模块

export default router
