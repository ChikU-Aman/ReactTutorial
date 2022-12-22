import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Parent from './Beginner/Parent';
import ParentFunction from './Counter/ParentFunction';
import ColorPicker from './ColorPallete/ColorPicker';
import ColorDisplay from './ColorPallete/ColorDisplay';
import Index from './ToDo/Index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="first" element={<Parent />}></Route>
          <Route path="firstFunction" element={<Parent />}></Route>
          <Route path="Counter" element={<ParentFunction/>}></Route>
          <Route path="Color" element={<ColorPicker/>}></Route>
          <Route path="ColorDisplay" element={<ColorDisplay/>}></Route>
          <Route path="todo" element={<Index/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
