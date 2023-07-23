import React from 'react';
import  ReactDOM  from 'react-dom/client';


//this is functional component, function which return jsx(first letter capital)
const HeaderComponenet = ()=>{
    return  <div style={{backgroundColor:'black', color:'white', width:'100vw', display:'flex' }}>Hi
        {/* component composition */}
        <SubComponenet/>
        {console.log("WE can write js here")}
    </div>
}

const SubComponenet = ()=>{
    return <div style={{color:'white'}}>World</div>
}



//this is react element, function which return jsx
const headerElement = (
     <div style={{backgroundColor:'black', color:'white', width:'100vw', display:'flex' }}>Hi
     {/* <AnotherSubComponenet/> this will not work */}
     </div>
)


const AnotherSubComponenet = ()=>{
    return <div style={{color:'white'}}>Wwwwd</div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponenet/>)