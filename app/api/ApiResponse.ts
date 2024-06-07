import { NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export interface ApiResponse {
  status: 'success' | 'error'
  message: string
  data: any
  code: number
}

export const responseWithSuccess = (
  message: String = '',
  data: any,
  code: number = 200
) =>
  NextResponse.json(
    {
      status: 'success',
      message: message,
      data: data,
      code: code
    } as ApiResponse,
    { status: code }
  )

export const responseWithError = (message: String = '', data: any, code: number = 400) =>
  NextResponse.json(
    {
      status: 'error',
      message: message,
      data: data,
      code: code
    } as ApiResponse,
    { status: code }
  )
