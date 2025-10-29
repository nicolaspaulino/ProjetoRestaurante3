import express from 'express';
import UserController from '../controller/Usuario_Controller.js';

const router = express.Router();

router.get('/', UserController.PaginaUserLogin);
router.post('/auth', UserController.authentication);
router.get('/new', UserController.PaginaUser);
router.post('/add', UserController.addNewUser);

export default router;