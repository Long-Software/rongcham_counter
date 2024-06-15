import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

const all = async (args?: Prisma.QueueFindManyArgs) => {
  prisma.queue.findMany(args)
  return await prisma.queue.findMany(args)
}
const find = async (args?: Prisma.QueueFindFirstArgs) => {
  return await prisma.queue.findFirst(args)
}
const last = async (category_id: number, args?: Prisma.QueueFindFirstArgs) => {
  return await prisma.queue.findFirst({
    ...args,
    orderBy: { number: 'desc' },
    where: { category_id: category_id }
  })
}
const create = async (data: Prisma.QueueCreateInput) => {
  return await prisma.queue.create({ data })
}
export default { all, find, last, create }
