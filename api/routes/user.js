import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
import { adminAuth } from '../middlewares/adminAuth.js';
import { authMiddleware } from '../middlewares/authMidleware.js';
import { singleAuthUser } from '../middlewares/singleAuthUser.js';

const router = express.Router();

// route rest api
router.route('/').get(adminAuth, getAllUser).post(authMiddleware,createUser)
router.route('/:id').get(authMiddleware,getSingleUser).put(singleAuthUser,updateUser).patch(singleAuthUser,updateUser).delete(singleAuthUser,deleteUser)

// route
router.post('/login', userLogin)
router.post('/register', userRegister)

export default router