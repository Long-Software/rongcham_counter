interface QueueInfo {
  id: number
  name: string
  category_id: number
}

interface CounterQueueInfo {
  id: number
  counter_number: number
  queue_name: string
}
type QueueStatus = 'serve' | 'wait' | 'skip' | 'done'

interface CounterInfo {
  name: string
  counter_number: string
  attendee_name: string
  finished_queue: number
  main_category_id: number
  secondary_category_id: number
}
