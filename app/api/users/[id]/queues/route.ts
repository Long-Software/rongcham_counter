import { resMessage, resWithSuccess } from '@/app/api/ApiResponse'

export const GET = async () => {
  return resWithSuccess(resMessage.fetch_success, null)
}
