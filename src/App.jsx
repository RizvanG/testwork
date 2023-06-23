import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersList from "./components/UsersList/UsersList";
import { useContext } from "react";
import { ShowModalContext } from "./context/ShowModalContext";
import Modal from "./components/Modal/Modal";

function App() {
  const { showModal } = useContext(ShowModalContext);

  return (
    <div className="wrapper">
      <Sidebar />
      {showModal && <Modal />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
