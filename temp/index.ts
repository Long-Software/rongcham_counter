import { Attendee, Business, Counter } from '@prisma/client'

export const counter: Counter = {
  id: 1,
  counter_number: 5,
  access_code: 'abcde',
  business_token: '',
  status: false,
  attendee_id: 1,
  main_category_id: 1,
  secondary_category_id: 2
}
export const attendee: Attendee = {
  id: 1,
  pin: '123456',
  name: 'Sammakara Mak',
  business_token: ''
}

export const business: Business = {
  id: 1,
  branch: 'branch',
  email: 'lseng3@paragoniu.edu.kh',
  industry: 'primary',
  name: 'ABA',
  subscription_id: 1
}
export const business_token: string = ''
