import prisma from "@/utils/db"
import { Prisma } from "@prisma/client"

const find  = async( args?: Prisma.AttendeeFindFirstArgs)=> {
    return await prisma.attendee.findFirst({})
}

export default {find}