import { Request, Response } from 'express'
import express from 'express'
import status from 'http-status-codes'
import { employeeController } from '../controllers/employee'
import { Employee } from '../types/employee'
import { employeeValidator } from '../validators/employee'

export const employee = express.Router()

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

employee.post('/create', async (req: Request, res: Response) => {
  try {
    // Send post paramas to validator
    const validation = employeeValidator.employee.validate(req.body)

    if (validation.error) {
      throw new Error(`Error en validación: ${validation.error}`)
    }

    const controllerResponse: Employee =
      await employeeController.createEmployee(req.body as Employee)

    res.status(status.OK).send(controllerResponse)
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
})
