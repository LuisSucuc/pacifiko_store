import { Request, Response } from 'express'
import status from 'http-status-codes'

const getAll = (req: Request, res: Response) => {
  try {
    // Fake service response
    const serviceResponse = { message: 'Hello World!' }

    res.status(status.OK).send(serviceResponse)
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
}

export const employeeController = {
  getAll,
}
