import React, { useEffect, useState,useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { showToast } from '../helper/showToast';
import { DataContext } from '../context/DataProvider';
import { useLocation } from 'react-router-dom';


const STATUS_COLORS = {
  completed: '#00C49F',
  pending: '#FFBB28',
  running: '#0088FE',
  failed: '#FF4C4C',
};

const groupTasksByStatus = (tasks) => {
  const statusCount = {
    completed: 0,
    pending: 0,
    running: 0,
    failed: 0,
  };

  tasks.forEach(({ status }) => {
    const normalizedStatus = status.toLowerCase();
    if (statusCount[normalizedStatus] !== undefined) {
      statusCount[normalizedStatus]++;
    }
  });

  return Object.entries(statusCount)
    .filter(([_, count]) => count > 0)
    .map(([status, count]) => ({
      name: status.charAt(0).toUpperCase() + status.slice(1),
      value: count,
      color: STATUS_COLORS[status],
    }));
};

const TaskPieChart = () => {
    const location = useLocation();
const [refresh,setrefresh]=useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
const { account } = useContext(DataContext);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
       

        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/task/get-all-task/${account.userid}`,{
                        method: 'GET',
                         headers: { 'Authorization': sessionStorage.getItem('accessToken') },
                    });

        const data = await res.json();

        if (!res.ok || data.status === false) {
          showToast('error', data.msg || data.message || 'Failed to fetch tasks');
        } else {
          setTasks(data.taskData);
        }
      } catch (err) {
        showToast('error', 'Server error while fetching tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [location,refresh]);

  const pieData = groupTasksByStatus(tasks);
 const refreshchart = () => {
    setrefresh(prev => !prev); // Trigger useEffect by toggling refresh
  };

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', boxShadow: 4, backgroundColor: 'rgba(0, 123, 255, 0.1)', padding: '0px', borderRadius: '8px'}}>
      <CardContent>
        <button className="text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none border border-blue-500 text-blue-500 px-4 py-2 rounded" onClick={refreshchart}>refresh</button>
        <Typography sx={{color:'white'}} variant="h6" align="center" gutterBottom>
          Task Status Overview
        </Typography>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
            <div style={{ backgroundColor: 'rgba(0, 123, 255, 0)', padding: '16px', borderRadius: '8px' }}>
          <PieChart width={450} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskPieChart;
