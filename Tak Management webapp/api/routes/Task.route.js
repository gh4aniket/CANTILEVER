import express from 'express'
import { createTask, deleteTask, getAllTask, showTask, updateTask } from '../controllers/Task.controller.js'
import { loginUser, logoutUser, signupUser } from '../controllers/Usercontroller.js';
import {authenticateToken} from '../controllers/Jwtcontroller.js';

const Taskrouter = express.Router()

Taskrouter.post('/create-task',authenticateToken, createTask)
Taskrouter.get('/get-all-task/:userid',authenticateToken, getAllTask)
Taskrouter.get('/show-task/:taskid',authenticateToken, showTask)
Taskrouter.put('/update-task/:taskid',authenticateToken, updateTask)
Taskrouter.delete('/delete-task/:taskid',authenticateToken, deleteTask)
Taskrouter.post('/login', loginUser)
Taskrouter.post('/signup', signupUser)
Taskrouter.post('/logout', logoutUser);
export default Taskrouter