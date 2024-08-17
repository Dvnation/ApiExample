import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Table } from './part2';
// import { BrowserRouter, Route, Router, Routes, HashRouter } from 'react-router-dom';
// import { Home } from './Components/Home';
// import { About } from './Components/About';
// import { NavBar } from './Components/NavBar';
// import { HowTo } from './Components/HowTo';
// import { Loading } from './loader';


import { BrowserRouter, Route, Router, Routes, HashRouter, Link } from 'react-router-dom';

import { GoogleBook } from './GoogleBooks';
import { FinCourses } from './FindCourses';
import { FindBook } from './Findbook';
import { Abouts } from './Abouts';




function App() {
 
    return (
    
   

        <> 
        



<HashRouter>
        
        <Routes>

            <Route path='/' exact Component={GoogleBook}/>
            <Route path='/FindBook' Component={FindBook}/>
            <Route path='/FindCourses' Component={FinCourses}/>
            <Route path='/About' Component={Abouts}/>




        </Routes>

</HashRouter>


        </>
    )


    
}

export default App;
