import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import HomeLayout from '../layouts/HomeLayout';
import Config from '../pages/Config';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<HomeLayout/>}> 
                <Route path='/home' element={<Home />} />
                <Route path='/config' element={<Config />} />
            </Route>
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};