import React, { useEffect, useState,useContext } from "react";
import Badge from "../components/Badge";
import { Link,useNavigate } from "react-router-dom";
import Task from "../components/Task";
import { showToast } from "../helper/showToast";
import { useLocation } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const TaskListPage = () => {
    const navigate = useNavigate();
      const location = useLocation();
    const [referesh, setReferesh] = useState(false)
    const [tasks, setTasks] = useState()
    const { account } = useContext(DataContext);
    useEffect(() => {
        setReferesh(false)
        const getTask = async () => {
            const user=account.userid;
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/get-all-task/${user}${location.search}`, {
                        method: 'GET',
                         headers: { 'Authorization': sessionStorage.getItem('accessToken') },
                    });
            const responseData = await response.json()
            console.log(responseData);
            if(responseData.success==false)
            {
                const msg=`${responseData.msg?responseData.msg:responseData.message} login again`;
                showToast('error',msg)
                navigate('/account');
            }
            console.log(responseData);
            setTasks(responseData)
        }
        getTask()
    }, [referesh,location.search])

    const deleteTask = async (taskid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/delete-task/${taskid}`, {
                method: 'DELETE',
                headers: { 'Authorization': sessionStorage.getItem('accessToken') }
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message?responseData.message:responseData.msg)
            }
            setReferesh(true)
            showToast('success', responseData.message)
        } catch (error) {
            showToast('error', error.message)
             if(error.message=='token is missing'||error.message=='invalid token')
            {
              setTimeout(() => {
                navigate('/account');
              }, 1500);  
            }
        }
    }

    return (
    <div>
    
        <div className="pt-5 ">
            <h1 className="text-sky-400 text-2xl font-bold mb-5">My Tasks</h1>

            {tasks && tasks.status ?
                tasks.taskData.length > 0 ? tasks.taskData.map((task) => <Task key={task._id} props={task} onDelete={deleteTask} />) : <>0 Task.</>
                :
                <>Loading...</>
            }

        </div>
   </div>    
    );
};

export default TaskListPage;