import { useMemo, useState } from "react";

var slowFunction=(number)=>{
    for(let i=0;i<10000000000;i++){}
    return number * 2;
}
var UseMemo=()=>{
    var[num,setNum]=useState(0);
    var[theme,updateTheme]=useState(true);
    var darkLight={
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",
    }
      var doublingANumber=useMemo(()=>{return slowFunction(num);},[num])

    return(
        <section>
            <h1>Use memo</h1>
            <input type="number" value={num} onChange={((e)=>setNum(e.target.value))}/>


            <button onClick={()=>updateTheme(theme=!theme)}>Change Theme</button>
            <h2 style={darkLight}>{doublingANumber}</h2>
        </section>
    )
}
export default UseMemo;