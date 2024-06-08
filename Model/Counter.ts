import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'

const all = async (args?: Prisma.CounterFindManyArgs) => {
  return await prisma.counter.findMany(args)
}
const find = async (args?: Prisma.CounterFindFirstArgs) => {
  return await prisma.counter.findFirst(args)
}

export default { all, find }
