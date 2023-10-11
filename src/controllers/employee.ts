import axios from 'axios'
import { Request, Response } from 'express'
import { EMPLOYEES_API } from '../constants/apis'
import { Employee, EmployeeResponse } from '../types/employee'

const getAll = async (): Promise<Employee[]> => {
  try {
    const { data }: { data: EmployeeResponse } = await axios.get(
      `${EMPLOYEES_API}/employees`
    )

    return data.data
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    throw new Error((error as Error).message)
  }
}

export const employeeController = {
  getAll,
}
