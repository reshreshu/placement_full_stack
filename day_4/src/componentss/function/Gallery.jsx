import {useState} from "react";
const Gallery=()=>{
     var [counter,setCount] =useState(0);
     function increment(){
        setCount(counter+1)
        
     }
     function decrement(){
        setCount(counter-1)
        
     }
     function reset(){
        setCount(0)
        
     }
    return (
        <section>
            <h1> this is my Gallery page</h1>
            <h2 style={{textAlign:"center"}}>learning state concept</h2>
            <h3>the state of my variable counter is {counter}</h3>
            <button onClick={increment}>increment</button>
            <button onDoubleClick={decrement}>decrement</button>
            <button onMouseOver={reset}>reset</button>
        </section>
    );
}
export default Gallery;