import logo from './logo.svg';
import './App.css';
import Base from './Book/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBookDetails from './Book/AddBookDetails';
import CardComp from './Book/CardComp';
import ContactUs from './Book/ContactUs';

function App() {
  return (
    <Base>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddBookDetails />}></Route>
          <Route path="/card" element={<CardComp/>}></Route>
          <Route path="" element={<CardComp/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </Base>
  );
}

export default App;
