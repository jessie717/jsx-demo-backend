import Router from 'koa-router'
import { getUsers, getUserByName, userLogin, userRegister } from '../controller/user.js'

const router = new Router()
router.get('/', getUsers)
router.get('/:username', getUserByName) // /user/xxx --> ctx.params
router.post('/login', userLogin)
router.post('/register', userRegister)

export default router
