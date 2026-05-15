import {Router} from "express";

import {
 getStudents,
getStudentById
} from "../controllers/studentsController";

const router = Router();

// path

router.get('/students', getStudents);
router.get('/students', getStudentById);

export default router;



