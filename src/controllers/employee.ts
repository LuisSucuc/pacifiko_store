import axios from 'axios'
import { Request, Response } from 'express'
import status from 'http-status-codes'
import { EMPLOYEES_API } from '../constants/apis'
import { EmployeeResponse } from '../types/employee'

const getAll = async (req: Request, res: Response) => {
  try {
    const { data }: { data: EmployeeResponse } = await axios.get(
      `${EMPLOYEES_API}/employees`
    )

    res.status(status.OK).send(data.data)
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
