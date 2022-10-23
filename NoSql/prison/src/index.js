import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './components/create'
import Update from './components/update'
import CreatePrison from './create/prison'
import CreateVisitor from './create/visitor'
import CreateGuard from './create/guard'
import CreatePrisoner from './create/prisoner'
import CreatePunishment from './create/punishment'
import CreateParole from './create/parole'
import UpdatePrison from './update/prison'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="/create" element={<Create />}/>
        <Route path ="/update" element={<Update />} />
        <Route path="/CreatePrison" element={<CreatePrison />}/>
        <Route path="/CreatePrisoner" element={<CreatePrisoner />}/>
        <Route path="/CreateGuard" element={<CreateGuard />}/>
        <Route path="/CreateVisitor" element={<CreateVisitor />}/>
        <Route path="/CreatePunishment" element={<CreatePunishment />}/>
        <Route path="/CreateParole" element = {<CreateParole />}/>
        <Route path='/UpdatePrison' element={<UpdatePrison/>} />

        
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
