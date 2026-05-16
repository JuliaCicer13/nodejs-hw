import {Router} from "express";

import {
 getStudents,
 getStudentById,
 createStudent,
} from "../controllers/studentsController.js";

const router = Router();

// path

router.get('/students', getStudents);
router.get('/students', getStudentById);
router.post('/students', createStudent);
export default router;



