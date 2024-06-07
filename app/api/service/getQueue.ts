'use server'
import { Queue, Prisma, Category } from '@prisma/client'
import axios from 'axios'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  try {
    const res = await axios.get(`${process.env.API_URL}/queues?token=${business_token}`)
    if (res.data.status == 'error') throw new Error(res.data.message)
    // let category_map: {}
    let queues: QueueInfo[] = []
    let categories: Category[] = []
    await axios
      .get(`${process.env.API_URL}/categories?token=${business_token}`)
      .then(res => (categories = res.data.data))

    const data = res.data.data
    data.map((queue: Queue) => {
      const prefix = categories.find(cat => cat.id == queue.category_id)
      queues.push({ id: queue.id, name: prefix?.acronym + queue.number.toString() })
    })
    return queues
  } catch (error) {
    throw error
  }
}
