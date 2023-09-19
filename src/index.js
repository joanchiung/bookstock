import React from 'react';
import ReactDOM from 'react-dom/client';
/* Tailwind CSS */
import './input.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
/* 共用 元件 */
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
/* 各個頁面 */
import Home from "./pages/home";
import Bookstock from "./pages/bookstock/bookstock";
import Calculator from "./pages/calculator/calculator";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar/>
        <div className="main-wrap ">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sidebar />}>
                        <Route index="index" element={<Home />}/>
                        <Route path="Bookstock" element={<Bookstock />}/>
                        <Route path="Calculator" element={<Calculator />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        <Footer/>
    </React.StrictMode>
);
