import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
