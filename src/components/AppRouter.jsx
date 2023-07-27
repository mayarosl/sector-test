import { Navigate, Route, Routes } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import TablePage from '../pages/TablePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} key={'/'}/>
      <Route path='/table' element={<TablePage key={'/table'}/>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;