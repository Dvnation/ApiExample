import { useEffect, useState } from "react";
import { HeaderBut } from "./headerButton";


export function FindBook(){
const [searchPar,setsearchPar] = useState()
const [displayItem,setDisplay] = useState([])
const [display,setd] = useState(false)

useEffect(()=>{
setd(true)
},[displayItem])

useEffect(()=>{
if (searchPar!=="") {
    setDisplay(()=>[])
}
},[searchPar])

const search = async()=>{
 const apiKey =    'AIzaSyB-SLSqK9_gk1IXnLm2UBRuV_XtSsX0Iwo'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchPar}&key=${apiKey}`

    try {
        const response = await fetch(url)
        if(!response){
            throw new Error("failed to search data")

        }

        const data = await response.json()
        console.log(data.items);
setDisplay(data.items)

    }catch(error) {
console.error('ERROR',error)
}
    
}
    return(
        <>
        <div>
            <HeaderBut/>
        </div>

        
<div>
<div className="section1Courses">
<h1>Input a book name: <input style={{border:"2px solid black", height:"30px"}} onChange={(e)=>setsearchPar(e.target.value)} type="search"/>

<button onClick={search} style={{color:"black",background:"burlywood", padding:"0px 25px",height:"30px"}}>FIND</button></h1> 

</div>

<div className="resultCourses">
<h1 style={{fontSize:"40px"}}>RESULTS:</h1>


<ul className="resultUl">

     {display && displayItem.map((item,index)=>{

        return(
            <>
           <li style={{width:"100%"}} key={index}>
           
           <img style={{}} src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title}/>

           <p>{item.volumeInfo.title}</p>
            <p>{item.volumeInfo.authors?.join(' ,')}</p>
            <p>{item.volumeInfo.publisher}</p>
            <p>{item.volumeInfo.publishedDate}</p>
            <p>{item.volumeInfo.description}</p>


           </li>
            
            </>
        )
    })}
</ul>


</div >

</div>
        </>
    )
}


