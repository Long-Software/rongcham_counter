import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

const all = async (args?: Prisma.CategoryFindManyArgs) => {
  // await prisma.$disconnect()
  // await prisma.$connect()
  return await prisma.category.findMany(args)
}
const find = async (args?: Prisma.CategoryFindFirstArgs) => {
  // await prisma.$disconnect()
  // await prisma.$connect()
  return await prisma.category.findFirst(args)
}

export default { all, find }
