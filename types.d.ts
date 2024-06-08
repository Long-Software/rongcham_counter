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
