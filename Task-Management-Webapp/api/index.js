import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Taskrouter from './routes/Task.route.js'

dotenv.config()

const PORT = process.env.PORT || 8000;

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'https://task-management-webapp-task.netlify.app'
}))


// routes 

app.use('/api/task', Taskrouter)

mongoose.connect(process.env.MONGODB_CONN).then(() => {
    console.log('Database connected.')
}).catch(err => console.log('Database connection failed.', err))


app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})
