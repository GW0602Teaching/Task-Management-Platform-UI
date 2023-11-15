import './App.css';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addProject" element={<AddProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
