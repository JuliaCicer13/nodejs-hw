import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";


const objectIdValidator = (value, helpers) => {
    return !isValidObjectId(value) ? helpers.messages('Invalid id format') : value;
}

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.odject({
    noteId:
    Joi.string().custom(isValidObjectId).required(),
  }),
};

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string(),
    search: Joi.string().trim().allow(""),
  }),
};

export const updateNoteChema = {
 [Segments.PARAMS]: Joi.object({
  noteId:
  Joi.string().custom(isValidObjectId).required(),

 }),
 [Segments.BODY]: Joi.object({
  title: Joi.string().min(1),
  content: Joi.string(""),
  tag: Joi.string(),
 }).min(1),
};

export const createNoteSchema = {
[ Segments.BODY]: Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string(""),
  tag: Joi.string(),
}),
};
