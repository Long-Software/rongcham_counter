import { Attendee, Business, Counter } from '@prisma/client'

export const counter: Counter = {
  id: 3,
  counter_number: '5',
  access_code: 'abcde',
  business_token: '2424f8a8-7083-4ad1-bb96-14548283a920',
  status: false,
  attendee_id: 1,
  main_category_id: 13,
  secondary_category_id: 15,
  created_at: new Date(),
  updated_at: new Date()
}
export const attendee: Attendee = {
  id: 3,
  pin: '123456',
  name: 'Sammakara Mak',
  business_token: '2424f8a8-7083-4ad1-bb96-14548283a920',
  created_at: new Date(),
  updated_at: new Date()
}

export const business: Business = {
  id: 1,
  branch: 'branch',
  email: 'lseng3@paragoniu.edu.kh',
  industry: 'primary',
  name: 'ABA',
  subscription_id: 1,
  business_token: '2424f8a8-7083-4ad1-bb96-14548283a920',
  created_at: new Date(),
  updated_at: new Date()
}
export const business_token: string = '2424f8a8-7083-4ad1-bb96-14548283a920'
