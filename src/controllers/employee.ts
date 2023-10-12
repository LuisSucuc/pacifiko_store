import axios from 'axios'
import { EMPLOYEES_API } from '../constants/apis'
import {
  Employee,
  EmployeeResponse,
  EmployeesResponse,
} from '../types/employee'
import { EmployeesBySalary } from '../types/responses'

/**
 * @description Get all employees
 * @returns Employee[] - Array of employees
 */

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

/**
 * @description Get employee by id
 * @param id - Employee id
 * @returns Employee - Employee object
 */
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

/**
 * @description Create employee
 * @param employeeData - Employee data
 * @returns Employee - Employee object
 */
const createEmployee = async (employeeData: Employee): Promise<Employee> => {
  console.log(employeeData)
  try {
    const { data }: { data: EmployeeResponse } = await axios.post(
      `${EMPLOYEES_API}/create`,
      employeeData
    )

    return data.data
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    throw new Error((error as Error).message)
  }
}

/**
 * @description Get employee salary
 * @param salary - Employee salary
 * @param type - Type of search
 * @returns Employee - Employee object
 */
const searchSalary = async (
  salary: number,
  type: string
): Promise<EmployeesBySalary> => {
  try {
    const { data }: { data: EmployeesResponse } = await axios.get(
      `${EMPLOYEES_API}/employees`
    )
    
    let employees: Employee[] = []
    // Filter all employees with salary greater than the given one if type is == 'greater'
    if (type === 'greater') {
      employees = data.data.filter(
        (employee: Employee) => employee.employee_salary > salary
      )
    }
    // Filter all employees with salary less than the given one if type is == 'less'
    if (type === 'less') {
      employees = data.data.filter(
        (employee: Employee) => employee.employee_salary < salary
      )
    }
    // Filter all employees with salary equal to the given one if type is == 'equal'
    if (type === 'equal') {
      employees = data.data.filter(
        (employee: Employee) => employee.employee_salary === salary
      )
    }

    return {
      total: employees.length,
      employees,
    }
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
  getEmployeesBySalary: searchSalary,
}
