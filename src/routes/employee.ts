import { Request, Response } from 'express'
import express from 'express'
import status from 'http-status-codes'
import { employeeController } from '../controllers/employee'
import { Employee } from '../types/employee'
import { employeeValidator } from '../validators/employee'
import { EmployeesBySalary } from '../types/responses'

export const employee = express.Router()

/**
 * @description Get all employees
 * @returns Employee[] - Array of employees
 **/
employee.get(
  '/',

  async (req: Request, res: Response) => {
    try {
      const controllerResponse: Employee[] = await employeeController.getAll()

      res.status(status.OK).send(controllerResponse)
    } catch (error: unknown) {
      // Log error and send response
      console.log(error)
      res
        .status(status.INTERNAL_SERVER_ERROR)
        .send({ description: (error as Error).message })
    }
  }
)

/**
 * @description Create employee
 * @param employeeData - Employee data
 * @returns Employee - Employee object
 */
employee.post('/create', async (req: Request, res: Response) => {
  try {
    // Send post paramas to validator
    const validation = employeeValidator.employee.validate(req.body)

    if (validation.error) {
      throw new Error(`Error en validación: ${validation.error}`)
    }
    const employeeData = req.body as Employee
    const controllerResponse: Employee =
      await employeeController.createEmployee(employeeData)

    res.status(status.OK).send(controllerResponse)
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
})

/**
 * @description Get employee salary
 * @returns Employee - Employee object
 */
employee.get('/salary', async (req: Request, res: Response) => {
  try {
    const validation = employeeValidator.salary.validate(req.query)

    if (validation.error) {
      throw new Error(`Error en validación: ${validation.error}`)
    }

    const controllerResponse: EmployeesBySalary =
      await employeeController.getEmployeesBySalary(
        Number(req.query.salary) as unknown as number,
        req.query.type as unknown as string
      )

    res.status(status.OK).send(controllerResponse)
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
})

/**
 * @description Get employee by id
 * @param id - Employee id
 * @returns Employee - Employee object
 */
employee.get('/:id', async (req: Request, res: Response) => {
  try {
    const validation = employeeValidator.id.validate(req.params)

    if (validation.error) {
      throw new Error(`Error en validación: ${validation.error}`)
    }

    const { id } = req.params
    const controllerResponse: Employee =
      await employeeController.getEmployeeById(id as unknown as number)

    res.status(status.OK).send(controllerResponse)
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
})
