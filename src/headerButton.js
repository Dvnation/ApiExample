

import './googlebook.css'
import { BrowserRouter, Route, Router, Routes, HashRouter, Link } from 'react-router-dom';

// // import { HeaderBut } from './headerButton';
// import { HomeSection1 } from './HomeSection1';

export function HeaderBut(){

return (
    <>
     <div className = "Header">
            <div> <h4 style={{border:"2px solid green", color:"green", marginLeft:"20px",fontSize:"25px"}}> Ariwizzy Educational library</h4>
            </div>
    <div className='Headbuttons'>
        

    <Link to='/'>  <button className='buts'>Home</button>  </Link>        
          <Link to='/FindBook'>  <button className='buts'>Find Books</button> </Link>
         <Link to='/FindCourses'>  <button className='buts'>Find Online Course</button>   </Link>         
          <Link to="/About"> <button className='buts'>About</button> </Link>

        </div>
        </div>
    </>
)
    
}