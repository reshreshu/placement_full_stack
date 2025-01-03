var express=require('express')
var app=express()
const PORT=3002
app.get('/',(req,res)=>{
    res.send('THIS IS RESHMA ALAVUTHEEN')
})
app.get('/json',(req,res)=>{
    res.send({server:"Welcome",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/reshm/OneDrive/Desktop/full_stack/backend_day6/index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend server connected\nUrl:http://localhost:${PORT}`);
})
