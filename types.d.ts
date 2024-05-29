interface Attendee {
  id: number
  pin: string
  name: string
}
export interface Counter {
  counter_number: number
  access_code: string
  attendee_id: number
}

interface Queue {
  id: number
  category_id: int
  number: int
  start_time?: Date
  end_time?: Date
}
