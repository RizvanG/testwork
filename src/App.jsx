import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/main' element={<Main />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
