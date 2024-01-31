import './App.css';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import { Provider } from 'react-redux';
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddTask from './components/ProjectBoard/Tasks/AddTask';
import Landing from './components/Layout/Landing';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />

            {/* Private Routes */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/addProject"
              element={<AddProject />}
            />
            <Route
              exact
              path="/updateProject/:id"
              element={<UpdateProject />}
            />
            <Route
              exact
              path="/projectBoard/:id"
              element={<ProjectBoard />}
            />
            <Route exact path="/addTask/:id" element={<AddTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
