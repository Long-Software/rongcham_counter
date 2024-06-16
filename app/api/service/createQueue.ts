'use server'
import axios from 'axios'
import { api, apiPost } from '../api'

export const createQueue = async (business_token: string, category_id: number) => {
  const form = new FormData()
  form.append('category_id', category_id.toString())
  await apiPost.post(`/queues?token=${business_token}`, form)
}
