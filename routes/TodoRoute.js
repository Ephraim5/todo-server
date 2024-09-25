import express, { Router } from 'express';
import { deleteTod, doneTask, getTodo, saveTodo, updateToDo } from '../controllers/todo.js';
const router = Router();
router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/update',updateToDo)
router.post('/delete',deleteTod)
router.post('/done',doneTask)
export default router;
