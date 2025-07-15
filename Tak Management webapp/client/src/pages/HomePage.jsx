import React, { useState,useEffect,useContext } from "react";
import { z, ZodError } from 'zod'
import { getZodError } from "../helper/getZodError";
import { showToast } from "../helper/showToast";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const HomePage = () => {

    const [formData, setFormData] = useState({
    title: '',
    description: '',
});
    const [err, setError] = useState()
    console.log("home page");
const navigate = useNavigate();
const { account } = useContext(DataContext);
  

    const taskSchema = z.object({
        title: z.string().min(3, { message: "Title must be at least 3 character long." }),
        description: z.string().min(3, { message: "Description must be at least 3 character long." }).max(500, { message: 'Lenght acceeded.' })
    }).passthrough();

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const finalData = {
            ...formData,
            userId: account.userid  // inject fresh userId at time of submit
        };
            const validatedData = taskSchema.parse(finalData)
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/create-task`,
                {
                    method: "POST",
                    headers: { 'Content-type': 'application/json' ,
                        'Authorization': sessionStorage.getItem('accessToken')
                    },
                    body: JSON.stringify(validatedData)
                })

            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message?responseData.message:responseData.msg)
            }
            setFormData({})
            showToast('success', responseData.message);
             navigate('/task-list');
        } catch (error) {
            if (error instanceof ZodError) {
                const getError = getZodError(error.errors)
                setError(getError)
            }
            showToast('error', error.message)
        }
    }

    return (
        <div className="pt-5">
            <h1 className="text-sky-400 text-2xl font-bold mb-5">Add Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="text-sky-400 block mb-2 text-sm font-medium text-gray-900 ">
                        Title
                    </label>
                    <input value={formData?.title || ''} onChange={handleInput} name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Task title"
                        required
                    />
                    {err && err.title && <span className="text-red-500 text-sm">{err.title}</span>}
                </div>
                <div className="mb-5">
                    <label className="text-sky-400 block mb-2 text-sm font-medium text-gray-900 ">
                        Description
                    </label>
                    <textarea value={formData?.description || ''} onChange={handleInput} name="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Task description..."
                    ></textarea>
                    {err && err.description && <span className="text-red-500 text-sm">{err.description}</span>}
                </div>

                <button
                    type="submit"
                    className="bg-sky-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HomePage;