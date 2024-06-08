import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

const all = async (args?: Prisma.CategoryFindManyArgs) => {
  return await prisma.category.findMany(args)
}
const find = async (args?: Prisma.CategoryFindFirstArgs) => {
  return await prisma.category.findFirst(args)
}

export default { all, find }
