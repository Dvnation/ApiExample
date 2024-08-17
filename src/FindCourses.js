import { HeaderBut } from "./headerButton";

export function FinCourses(){


    const fetchData = async()=>{

alert("Sorry Page inactive at the moment")
    }

    return(
        <>
        <div>
            <HeaderBut/>
        </div>

<div style={{border:"2px solid black", height:"80vh"}}>
<div className="section1Courses">
<h1>Input a course name: <input style={{border:"2px solid black",height:"30px"}} onChange={(e)=>alert(e.target.value)} type="search"/>

<button onClick={fetchData} style={{color:"black",background:"burlywood", padding:"0px 25px",height:"30px"}}>FIND</button></h1> 

</div>

<div className="resultCourses">
<h1 style={{fontSize:"40px"}}>RESULTS:</h1>

</div >

</div>

        </>
    )
}
