import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Question from '../components/Question';


export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<Question />} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
