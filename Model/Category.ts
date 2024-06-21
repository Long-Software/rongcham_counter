import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'

const all = async (args?: Prisma.CategoryFindManyArgs) => {
  return await prisma.category.findMany(args)
}
const find = async (args?: Prisma.CategoryFindFirstArgs) => {
  return await prisma.category.findFirst(args)
}

const create = async (data: Prisma.CategoryCreateInput) => {
  // const 
  // supabase.from
  return await prisma.category.create({ data })
}

const update = async (
  id: number,
  business_token: string,
  data: Prisma.CategoryUpdateInput
) => {
  return await prisma.category.update({ where: { id, business_token }, data })
}
const destroy = async (id: number, business_token: string) => {
  return await prisma.category.delete({ where: { id, business_token } })
}
export default { all, find, create, update, destroy }
