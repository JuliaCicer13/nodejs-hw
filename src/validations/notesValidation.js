import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";


const objectIdValidator = (value, helpers) => {
    return !isValidObjectId(value) ? helpers.messages('Invalid id format') : value;
}

export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.odject({
    noteId:
    Joi.string().custom(objectIdValidator).required(),
  }),
};

export const updateNoteChema = {
 [Segments.PARAMS]: Joi.object({
  noteId:
  Joi.string().custom(objectIdValidator).required(),

 }),
 [Segments.BODY]: Joi.object({
  name: Joi.string().min(3).max(30),
  age: Joi.number().integer().min(12).max(65),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
 }).min(1),
};

export const createNoteSchema = {
[ Segments.BODY]: Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name must be string",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name shpould have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  age: Joi.number().integer().min(12).max(65).required().messages({
    "name.base": "Age must be a number",
    "number.min": "Age must at least {#limit}",
    "number.max": "Age must be at most {#limit}",
    "ane.required": "Age is required",
  }),
  gender: Joi.string().valid("male","female","other").required().messages({
    "any.only": "Gender must be one of: male, female, or other",
    "any.required": "Gender is required",
  }),
  avgMark: Joi.number().min(2).max(12).required().messages({
    "number.base": "Average mark must be number",
    "number.min": "Average mark must be at least {#limit}",
    "number.max": "Average mark must be at most {#limit}",
     "number.required": "Average mark is required",
  }),
  onDuty: Joi.boolean().messages({
    "boolen.base": "onDuty must be a boolean value",
  }),
}),
};
