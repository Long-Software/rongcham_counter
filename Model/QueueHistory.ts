import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'

const all = async (args?: Prisma.QueueHistoryFindFirstArgs) => {
  return await prisma.queueHistory.findMany(args)
}
const create = async (data: Prisma.QueueHistoryCreateInput) => {
  return await prisma.queueHistory.create({ data })
}
const find = async (args?: Prisma.QueueHistoryFindFirstArgs) => {
  return await prisma.queueHistory.findFirst(args)
}
const last = async (args?: Prisma.QueueHistoryFindFirstArgs) => {
  return await prisma.queueHistory.findFirst({
    ...args,
    orderBy: { created_at: 'desc' }
  })
}
const update = async (
  where: Prisma.QueueHistoryWhereUniqueInput,
  data: Prisma.QueueHistoryUpdateInput
) => {
  return await prisma.queueHistory.update({ where, data })
}
const destory = async () => {}
export default { all, create, update, find, destory, last }
