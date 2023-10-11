// Type definitions for Employee

export type Employee = {
  id?: number
  employee_name: string
  employee_salary: number
  employee_age: number
  profile_image: string
}


export type EmployeesResponse = {
  status: string
  data: Employee[]
}

export type EmployeeResponse = {
  status: string
  data: Employee
}
