import joi from 'joi'

const idValidator = joi.object({
  id: joi.number().required(),
})

export const employeeValidator = {
  idValidator,
}
