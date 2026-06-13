import { Router } from "express";
import { celebrate } from "celebrate";
import {loginUser,
        registerUser,
        refreshUserSession,
        logutUser, } from "../controllers/authController.js";

import {loginUserSchema, registerUserSchema} from "../validations/authValidation.js";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
