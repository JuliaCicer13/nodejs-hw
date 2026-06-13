import {Router} from "express";
import { celebrate, Segments } from "celebrate";
import {
 getAllNotes,
 getNoteById,
 createNote,
 deleteNote,
 updateNote,
} from "../controllers/notesController.js";
import { createNoteSchema } from "../validations/notesValidation.js";
import { noteIdSchema } from "../validations/notesValidation.js";
import { updateNoteSchema } from "../validations/notesValidation.js";
import { getAllNotesSchema } from "../validations/notesValidation.js";

import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// path
router.use('/notes', authenticate);
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
export default router;



