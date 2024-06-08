import prisma from '@/utils/db'
import { createClient } from '@/utils/supabase/server'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

// const create = async (data: Prisma.CategoryCreateInput) => {
//   const Business = z.object({ email: z.string().email() })
//   try {
//     Business.parse(data)
//     const business = await prisma.category.create({ data })
//     // revalidatePath('/tasks')
//     return { success: true, message: 'success', data: business }
//   } catch (error) {
//     return { error: true, message: 'error' }
//   }
// }

const all = async (args?: Prisma.CategoryFindManyArgs) => {
  const supabase = createClient()
  return await prisma.category.findMany(args)
  // return await supabase.from('categories').select();
}
const find = async (args?: Prisma.CategoryFindFirstArgs) => {
  return await prisma.category.findFirst(args)
}

export default { all, find }
