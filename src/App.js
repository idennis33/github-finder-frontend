import React from 'react';
import Navbar from './components/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

export default function App() {
  return (
    <div className="App">
     <Navbar/>
     <UserItem />
    </div>
  );
}


