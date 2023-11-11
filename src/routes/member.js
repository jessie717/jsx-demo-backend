import Router from 'koa-router'
import { getMembers, getMembersById, getMembersByGender } from '../controller/member.js'

const router = new Router()
router.get('/', getMembers)
router.get('/id', getMembersById) // /member/id/id=xxx --> ctx.request.query
router.get('/:id', getMembersById) // /member/xxx  --> ctx.params
router.get('/gender', getMembersByGender)

export default router
