import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './Components/AppBar';
import ContactMe from './Pages/ContactPage';
import Projects from './Pages/ProjectsPage';
import AboutMe from './Pages/AboutMePage';
import TodoList from './Pages/TodoListPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<ContactMe />} />
      <Route path="/Todo" element={<TodoList />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
