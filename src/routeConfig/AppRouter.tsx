import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { UserPage } from '../pages/UserPage/UserPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:login' element={<UserPage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default AppRouter;
