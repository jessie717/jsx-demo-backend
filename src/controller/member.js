import { queryMembers, queryMembersById, queryMembersByGender } from '../service/member.js'

const getMembers = async (ctx, next) => {
  try {
    const data = await queryMembers()
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
const getMembersById = async (ctx, next) => {
  try {
    const { id } = ctx.params || ctx.request.query
    const data = await queryMembersById(id)
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
const getMembersByGender = async (ctx, next) => {
  try {
    const { gender } = ctx.request.query
    const data = await queryMembersByGender(gender)
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

export { getMembers, getMembersById, getMembersByGender }
