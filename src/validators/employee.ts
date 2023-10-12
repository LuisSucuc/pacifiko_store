import joi from 'joi'

const id = joi.object({
  id: joi.number().required(),
})

const employee = joi.object({
  employee_name: joi.string().required(),
  employee_salary: joi.number().min(1).required(),
  employee_age: joi.number().min(1).required(),
  profile_image: joi.string().required(),
})

const salary = joi.object({
  salary: joi.number().min(1).required(),
  type: joi.string().required(),
})

export const employeeValidator = {
  id,
  employee,
  salary,
}
