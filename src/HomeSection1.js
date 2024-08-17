
import './googlebook.css'
import { Link } from 'react-router-dom'
export function HomeSection1(){

    return(
        <>
        <div className='item1'>
  
  
  <h1>Obtain your <span style={{color:"green"}}>favorite</span> contents here <span style={{color:"black"}}>.</span></h1>
 
  <h2 style={{color:"green"}}>With a single <span style={{color:"red"}}>click</span></h2>

<div style={{lineHeight:-4, display:"flex", alignItems:"center", width:"94vw", justifyContent:"space-evenly"}}>

<Link to = '/FindCourses' style={{textDecorationLine:"none"}}><h1 style={{color:"blue", border:"1px solid black", padding:"0px 20px", background:"white"}} >#Books</h1></Link>

<Link to='/FindBook' style={{textDecorationLine:"none"}}><h1 style={{color:"red", border:"2px solid black", padding:"0px 20px", background:"white"}} >#Online courses</h1></Link>
</div>
</div>
<div className='item2'>

</div>
        
        </>
    )
}