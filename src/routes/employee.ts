import { Request, Response } from 'express'
import express from 'express'
import status from 'http-status-codes'
import { employeeController } from '../controllers/employee'
import { Employee } from '../types/employee'

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
