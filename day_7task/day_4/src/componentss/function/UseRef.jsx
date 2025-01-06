import { useRef,useState,useEffect } from "react";
var UseRef=()=>{
    var [text,setText]=useState("");
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text;
    },[text])
    return(
        <section>
            <h1>This is a example of useref</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> 
            <h2>My current render is {text}</h2>
            <h3>My previous render is {prevText.current}</h3>
        </section>
    )

}
export default UseRef;