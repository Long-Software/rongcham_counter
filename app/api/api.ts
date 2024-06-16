import axios from 'axios'
import { constants } from 'http2'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
  // headers: { 'Content-Type': 'application/json' }
})

export const apiPost = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
