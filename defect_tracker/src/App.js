import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Base/Header';
import Footer from './Base/Footer';
import Dashboard from './Dashboard.js/Dashboard';
import AddDefect from './Dashboard.js/AddDefect';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/AddDefect" element={<AddDefect/>}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
