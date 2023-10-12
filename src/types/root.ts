import { Request, Response } from 'express'
import express from 'express'
import status from 'http-status-codes'

export const root = express.Router()

/**
 * @description Default index route
 * @returns Welcome message
 **/
root.get('/', async (req: Request, res: Response) => {
  try {
    res.status(status.OK).send({
      message: 'Welcome to the Pacifiko API Test',
      created_by: 'Luis Sucuc',
    })
  } catch (error: unknown) {
    // Log error and send response
    console.log(error)
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ description: (error as Error).message })
  }
})
