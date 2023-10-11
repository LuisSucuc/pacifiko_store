import axios from 'axios'
import { EMPLOYEES_API } from '../constants/apis'
import {
  Employee,
  EmployeeResponse,
  EmployeesResponse,
} from '../types/employee'

const getAll = async (): Promise<Employee[]> => {
  try {
    const { data }: { data: EmployeesResponse } = await axios.get(
      `${EMPLOYEES_API}/employees`
    )

    return data.data
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    throw new Error((error as Error).message)
  }
}

const getEmployeeById = async (id: number): Promise<Employee> => {
  try {
    const { data }: { data: EmployeeResponse } = await axios.get(
      `${EMPLOYEES_API}/employee/${id}`
    )

    return data.data
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    throw new Error((error as Error).message)
  }
}

const createEmployee = async (employeeData: Employee): Promise<Employee> => {
  console.log(employeeData)
  try {
    const { data }: { data: EmployeeResponse } = await axios.post(
      `${EMPLOYEES_API}/create`,
      employeeData,
    )

    console.log(data)

    return data.data
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    throw new Error((error as Error).message)
  }
}

export const employeeController = {
  getAll,
  getEmployeeById,
  createEmployee,
}
