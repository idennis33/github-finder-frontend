import React from 'react';
import Navbar from './components/Navbar';
import Users from './components/users/Users';
import './App.css';

export default function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container">
        <Users />
     </div>
     
    </div>
  );
}


