import Router from 'koa-router'
import { queryData } from '../controller/bff.js'

const router = new Router()
router.get('/info', queryData)
// router.get('/:username', getUserByName) // /user/xxx --> ctx.params

export default router
