import { resMessage, responseWithSuccess } from "@/app/api/ApiResponse"

export const GET = async() => {
    return responseWithSuccess(resMessage.fetch_success,null);
}