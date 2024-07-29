// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div className="App">
                <h1 className="text-center mt-4">Account Management</h1>
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route 
                        path="/profile" 
                        element={
                            user ? (
                                <Profile user={user} setUser={setUser} />
                            ) : (
                                <h2 className="text-center">Please log in to view this page.</h2>
                            )
                        } 
                    />
                    <Route 
                        path="/" 
                        element={
                            <h2 className="text-center">
                                Welcome! Please <a href="/login">login</a> or <a href="/register">register</a>.
                            </h2>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
