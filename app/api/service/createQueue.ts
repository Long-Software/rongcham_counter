'use server'
import axios from 'axios'

export const createQueue = async (business_token: string, category_id: number) => {
  const form = new FormData()
  form.append('category_id', category_id.toString())
  await axios.post(`${process.env.API_URL}/queues?token=${business_token}`,form).catch(err => console.log(err))
}
