import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
        enum: ['Pending', 'Running', 'Completed', 'Failed']
    },
    userId: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const TaskModel = new mongoose.model('Task', TaskSchema, 'tasks')
export default TaskModel