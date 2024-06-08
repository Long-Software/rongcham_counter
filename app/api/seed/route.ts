import { Prisma } from '@prisma/client'
import prisma from '@/utils/db'
import { createClient } from '@/utils/supabase/server'
const busSeed: Prisma.BusinessCreateInput[] = [
  { email: 'lseng3@paragoniu.edu.kh', subscription_id: 1 }
]
const catSeed: Prisma.CategoryCreateInput[] = [
  { acronym: 'AO', name: 'Account Opening', business_token: '' },
  { acronym: 'AC', name: 'Account Closure', business_token: '' },
  { acronym: 'GI', name: 'General Inquiry', business_token: '' }
]
const attSeed: Prisma.AttendeeCreateInput[] = [
  { pin: '123', name: 'Lang', business_token: '' },
  { pin: '124', name: 'Leng', business_token: '' },
  { pin: '125', name: 'Ling', business_token: '' },
  { pin: '126', name: 'Long', business_token: '' },
  { pin: '127', name: 'Lung', business_token: '' }
]
const couSeed: Prisma.CounterCreateInput[] = [
  {
    counter_number: 1,
    access_code: '123',
    business_token: '',
    attendee_id: 1,
    main_category_id: 1,
    secondary_category_id: 2
  }
]
const useSeed: Prisma.UserCreateInput[] = [
  { firstname: 'Long', lastname: 'Seng', phone_number: '0123456789' },
  { firstname: 'Sammakara', lastname: 'Mak', phone_number: '0123456789' }
]

const seedHandler = async () => {
  const supabase = createClient()
  // supabase.from('categories').insert({})
  await prisma.business.deleteMany()
  await prisma.category.deleteMany()
  await prisma.attendee.deleteMany()
  await prisma.counter.deleteMany()
  // await prisma.user.deleteMany()
  await prisma.queue.deleteMany()

  // // Seeder
  busSeed.map(async data => await prisma.business.create({ data }))
  catSeed.map(async data => await prisma.category.create({ data }))
  attSeed.map(async data => await prisma.attendee.create({ data }))
  couSeed.map(async data => await prisma.counter.create({ data }))
  // useSeed.map(async data => await prisma.user.create({ data }))
}

export const GET = async (req: Request) => {
  await seedHandler()
  return Response.json({ message: 'seed ' })
}
