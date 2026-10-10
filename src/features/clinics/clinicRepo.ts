import {prisma} from "../../shared/clients/prisma.js";
import {Clinic, ClinicCreationData} from "./schema.js";

export const createClinic = async (
    ownerId: number,
    data: ClinicCreationData
): Promise<Clinic> => {
    return await prisma.clinic.create({
        data: {
            name: data.name,
            location: data.location,
            ownerId: ownerId,
        },
        select: {
            id: true,
            name: true,
            location: true,
        }
    })
}

export const doesClinicExists = async (
    ownerId: number,
    data: ClinicCreationData
): Promise<boolean> => {
    const clinic =  prisma.clinic.findFirst({
        where: {
            ownerId: ownerId,
            name: data.name,
            location: data.location,
        },
        select: {
            id: true
        }
    })
    return !!clinic
}

export const getClinicById = async (clinicId: number, ownerId: number): Promise<boolean> => {
    return !!(await prisma.clinic.findFirst({
        where: {
            id: clinicId,
            ownerId: ownerId
        },
        select: {
            id: true,
        }
    }))
}