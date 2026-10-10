import {prisma} from "../../shared/clients/prisma.js";
import {email} from "zod";
import {DoctorCreateData} from "./schema.js";

export const doctorExists = async (
    data: DoctorCreateData
) => {
    return !!(await prisma.doctor.findFirst({
        where: {
            email: data.email,
            firstName: data.firstName,
            clinicId: data.clinicId
        },
        select: {
            id: true
        }
    }))
}


export const createDoctor = async (
    data: DoctorCreateData
)=> {
    const {id} =  await prisma.doctor.create({
        data: {
            ...data,
        },
        select: {
            id: true
        }
    })
    return id
}