import React, { useState } from 'react';

// function Mouse(){
//     const [clientX, setCounterX] = useState(0)
//     const [clientY, setCounterY] = useState(0)

//     const handeleMouseMoove = (event)=> {
//         // console.log(event);
        
//         setCounterX(event.clientX) 
//         setCounterY(event.clientY)
        
//     }

//         return(
//             <div onMouseMove = {handeleMouseMoove} className= "div">

//                 X:{clientX}, Y:{clientY}
//             </div>
//         )
// }

class Mouse extends React.Component {
    state = {clientX , clientY};


    handeleMouseMoove = (event)=> {                
                
                this(event.clientX) 
                this(event.clientY)   
    }
    render(){
        return(
            <div onMouseMove = {this.handeleMouseMoove} className= "div">

                X:{clientX}, Y:{clientY}
            </div>
                )
    }

    
}

export default Mouse;

