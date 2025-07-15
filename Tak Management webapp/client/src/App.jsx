import { useState } from 'react';
import { Routes, Route, BrowserRouter,Outlet,Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import ShowTask from './pages/ShowTask';
import { Grid, Box } from '@mui/material';
import Menu from './pages/Menu';
import Login from './pages/Login';
import DataProvider from './context/DataProvider';
import { ToastContainer } from 'react-toastify';
import { showToast } from './helper/showToast';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import TaskPieChart from './components/Piechart';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
              
              <Grid container sx={{ minHeight: '100vh' }}>
                <Header/>
          {/* Left Half */}
          <Grid item xs={12} md={6} lg={4}>
            <Grid container direction="column" sx={{ height: '100%' }}>
              <Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Menu/>
              </Grid>
              <Grid item sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <TaskPieChart/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Outlet />
           </Grid>
        </Grid>  
    </> : 
    <Navigate replace to='/account' />
};

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      
<div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1509023464722-18d996393ca8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-fixed">
          {console.log("app page")}
      
          {/* Right Half - Your Existing Routes */}
            <Routes>
              
               <Route path="/account" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

          {/* Protected Routes with Shared Layout */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          {console.log("inside private page")}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="task-list" element={<TaskListPage />} />
              <Route path="show-task/:taskid" element={<ShowTask />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
          </Route>
              
              
            </Routes>
         </div>
      </BrowserRouter>
     </DataProvider>
  );
};

export default App;
