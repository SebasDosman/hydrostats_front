import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Dashboard, AIModel, AboutUs } from '../pages';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={ <Navigate to='/home' /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='dashboard' element={ <Dashboard /> } />
            <Route path='ai-model' element={ <AIModel /> } />
            <Route path='about-us' element={ <AboutUs /> } />
        </Routes>
    );
};
