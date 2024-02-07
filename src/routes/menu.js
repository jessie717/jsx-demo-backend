import Router from 'koa-router'
import { responseMenuConfig, userLogin, userLogout } from '../controller/menu.js'

const router = new Router()
router.post('/login', userLogin)
router.get('/logout', userLogout)
router.get('/config', responseMenuConfig)
// router.get('/:username', getUserByName) // /user/xxx --> ctx.params

export default router
