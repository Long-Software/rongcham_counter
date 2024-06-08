import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'

const all = async (args?: Prisma.QueueHistoryFindFirstArgs) => {
  return await prisma.queueHistory.findMany(args)
}
const create = async (data: Prisma.QueueHistoryCreateInput) => {
  return await prisma.queueHistory.create({ data })
}
export default { all, create }
