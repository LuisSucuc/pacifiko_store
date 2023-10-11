import express from 'express'
export const employee = express.Router()
import { employeeController } from '../controllers/employee'

employee.get('/', employeeController.getAll)
