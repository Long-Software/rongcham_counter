import { tokenSchema } from '@/utils/schema'
import { NextRequest, NextResponse } from 'next/server'

export const resWithSuccess = (message = 'success response', data: any, code = 200) =>
  NextResponse.json(
    {
      status: 'success',
      message: message,
      data: data,
      code: code
    } as ApiResponse,
    { status: code }
  )

export const resWithError = (message = 'error response', data: any = {}, code = 400) =>
  NextResponse.json(
    {
      status: 'error',
      message: message,
      data: data,
      code: code
    } as ApiResponse,
    { status: code }
  )

export const getAuthToken = (req: NextRequest): string => {
  const authHeader = req.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) return ''
  const token = authHeader.split(' ')[1]
  return validToken(token) ? token : ''
}

const validToken = (token: string): boolean => {
  return tokenSchema.safeParse(token).success
}

export const resMessage = {
  token_error: 'Token is missing or invalid',
  fetch_success: 'data fetch successfully',
  missing_data: 'data is missing or invalid',
  create_success: 'create successfully',
  update_success: 'update successfully',
  delete_success: 'delete successfully',
  fetch_error: 'data fetch error'
}
