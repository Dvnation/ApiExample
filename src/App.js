import React from 'react';



import { Route, Routes } from 'react-router-dom';

import { GoogleBook } from './GoogleBooks';
import { FinCourses } from './FindCourses';
import { FindBook } from './Findbook';
import { Abouts } from './Abouts';




function App() {
 
    return (
    
   

        <> 
        



        
        <Routes>

            <Route path='/' exact Component={GoogleBook}/>
            <Route path='/FindBook' Component={FindBook}/>
            <Route path='/FindCourses' Component={FinCourses}/>
            <Route path='/About' Component={Abouts}/>




        </Routes>



        </>
    )


    
}

export default App;
