import React from 'react'
import { Prisma } from '@prisma/client'
import prisma from '@/utils/db'

const busSeed: Prisma.BusinessCreateInput[] = [{ email: 'lseng3@paragoniu.edu.kh' }]
const catSeed: Prisma.CategoryCreateInput[] = [
  { acronym: 'AO', name: 'Account Opening', business_token: '' },
  { acronym: 'AC', name: 'Account Closure', business_token: '' },
  { acronym: 'GI', name: 'General Inquiry', business_token: '' }
]
const seedHandler = async () => {
  await prisma.business.deleteMany()
  await prisma.category.deleteMany()

  // Seeder
  busSeed.map(async data => await prisma.business.create({ data }))
  catSeed.map(async data => await prisma.category.create({ data }))
}

const SeederPage = async () => {
  await seedHandler()
  return <div>SeederPage</div>
}

export default SeederPage
