'use server'

import axios from "axios"

const HandleLogin = async(email: string, ) => {
  const formData = new FormData()
  formData.append('email', email)

  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/counters/auth/business-login`)
}

export default HandleLogin