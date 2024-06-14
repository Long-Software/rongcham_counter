import prisma from '@/utils/db'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

const create = async (data: Prisma.BusinessCreateInput) => {
  const Business = z.object({ email: z.string().email() })
  try {
    Business.parse(data)
    const business = await prisma.business.create({ data })
    return { success: true, message: 'success', data: business }
  } catch (error) {
    return { error: true, message: 'error' }
  }
}

const all = async (args?: Prisma.BusinessFindManyArgs) => {
  return await prisma.business.findMany(args)
}

export default { create, all }
