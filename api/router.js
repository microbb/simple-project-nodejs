import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post('/projects', PostController.create);
router.get('/projects', PostController.getAll);
router.get('/projects/:id', PostController.getOne);
router.put('/projects', PostController.update);
router.delete('/projects/:id', PostController.delete);


export default router;