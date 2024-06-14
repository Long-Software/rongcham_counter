import { Business, Prisma, Subscription } from '@prisma/client'
import prisma from '@/utils/db'
import { randomUUID } from 'crypto'
import { faker } from '@faker-js/faker'

const token = randomUUID()

const seedSubscription = async () => {
  const subSeed: Prisma.SubscriptionCreateManyInput[] = [
    { name: 'Starter', price: 0, category_limit: 10, counter_limit: 10, description: '' }
  ]
  await prisma.subscription.deleteMany()
  await prisma.subscription.createMany({ data: subSeed, skipDuplicates: true })
}

const seedBusiness = async () => {
  const subscriptions: Subscription[] = await prisma.subscription.findMany()

  await prisma.business.deleteMany()
  const busSeed: Prisma.BusinessCreateManyInput[] = [
    {
      email: 'lseng3@paragoniu.edu.kh',
      subscription_id: faker.helpers.arrayElement(subscriptions).id,
      branch: '1',
      business_token: token,
      industry: 'bank',
      name: 'ABA'
    }
  ]
  await prisma.business.createMany({ data: busSeed, skipDuplicates: true })
}

const seedCategory = async () => {
  const catSeed: Prisma.CategoryCreateManyInput[] = [
    { acronym: 'AO', name: 'Account Opening', business_token: token, status: false },
    { acronym: 'AC', name: 'Account Closure', business_token: token, status: false },
    { acronym: 'GI', name: 'General Inquiry', business_token: token, status: false }
  ]
  await prisma.category.deleteMany({})
  await prisma.category.createMany({ data: catSeed, skipDuplicates: true })
}

const seedAttendee = async () => {
  const attSeed: Prisma.AttendeeCreateManyInput[] = [
    { pin: '123', name: 'Lang', business_token: token },
    { pin: '124', name: 'Leng', business_token: token },
    { pin: '125', name: 'Ling', business_token: token },
    { pin: '126', name: 'Long', business_token: token },
    { pin: '127', name: 'Lung', business_token: token }
  ]
  await prisma.attendee.deleteMany({})
  await prisma.attendee.createMany({ data: attSeed, skipDuplicates: true })
}
const seedCounter = async () => {
  const categories = await prisma.category.findMany()
  const attendees = await prisma.attendee.findMany()
  const couSeed: Prisma.CounterCreateManyInput[] = [
    {
      counter_number: '1',
      access_code: '123',
      business_token: token,
      attendee_id: faker.helpers.arrayElement(attendees).id,
      main_category_id: faker.helpers.arrayElement(categories).id,
      secondary_category_id: faker.helpers.arrayElement(categories).id
    },
    {
      counter_number: '2',
      access_code: '123',
      business_token: token,
      attendee_id: faker.helpers.arrayElement(attendees).id,
      main_category_id: faker.helpers.arrayElement(categories).id,
      secondary_category_id: faker.helpers.arrayElement(categories).id
    },
    {
      counter_number: '3',
      access_code: '123',
      business_token: token,
      attendee_id: faker.helpers.arrayElement(attendees).id,
      main_category_id: faker.helpers.arrayElement(categories).id,
      secondary_category_id: faker.helpers.arrayElement(categories).id
    }
  ]
  await prisma.counter.deleteMany({})
  await prisma.counter.createMany({ data: couSeed, skipDuplicates: true })
}
const seedUser = async () => {
  const useSeed: Prisma.UserCreateManyInput[] = [
    {
      firstname: 'Long',
      lastname: 'Seng',
      phone_number: '0123456789',
      user_token: randomUUID()
    },
    {
      firstname: 'Sammakara',
      lastname: 'Mak',
      phone_number: '0123456789',
      user_token: randomUUID()
    }
  ]
  await prisma.user.deleteMany({})
  await prisma.user.createMany({ data: useSeed, skipDuplicates: true })
}
const seedHandler = async () => {
  await prisma.$disconnect()
  await prisma.$connect()
  await seedSubscription() // subscription
  await seedBusiness() // business
  await seedCategory() // category
  await seedAttendee() // attendee
  await seedCounter() // counter
  await seedUser() // user
  // queue
  await prisma.queue.deleteMany({})
}

export const GET = async (req: Request) => {
  await seedHandler()
  return Response.json({ message: 'seed' })
}
