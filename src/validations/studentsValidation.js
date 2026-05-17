import { Joi, Segments } from "celebrate";


export const createStudentSchema = {
[ Segments.BODY]: Joi.object({
  name: Joi.string().min(3).max(30).required().message({
    "string.base": "Name must be string",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name shpould have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  age: Joi.number.integer().min(12).max(65).required().message({
    "name.base": "Age must be a number",
    "number.min": "Age must at least {#limit}",
    "number.max": "Age must be at most {#limit}",
    "ane.required": "Age is required",
  }),
  gender: Joi.string().valid("male","female","other").required().message({
    "any.only": "Gender must be one of: male, female, or other",
    "any.required": "Gender is required",
  }),
  avgMark: Joi.number().min(2).max(12).required().message({
    "number.base": "Average mark must be number",
    "number.min": "Average mark must be at least {#limit}",
    "number.max": "Average mark must be at most {#limit}",
     "number.required": "Average mark is required",
  }),
  onDuty: Joi.boolean().message({
    "boolen.base": "onDuty must be a boolean value",
  }),
}),
};
