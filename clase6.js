const http = require("http"); 
const PORT = 8080;
const server = http.createServer((req, res)=>{
    //getHours
    const hora = new Data().tolocaleString().sprit(" ")[1];
    if(hora >= 6 && hora <= 12){
       res.end('buenos dias');
    }else if(hora > 12 && hora <=19){
        res.end('buenas tardes');
    }else {
        res.end('buenas noches')
    }

    res.end(`${hora}`);
});

server.listen(PORT,() => {
    console.log(
        `Servidor Http escuchando en el puerto http://localhost:${PORT}`
    );
});

//ejemplo de express
const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.send("Hello Word!");
});
app.get("/matias",(req, res) => {
    res.json({id:102, name:"matias",age:40});
});
app.get("/sofia",(req, res) => {
    res.json({id:103, name:"sofia",age:45});
});
app.get("/alumnos",(req, res) => {
    res.json([
        {id:100, name:"carla",age:20},
        {id:101, name:"guille",age:30},
        {id:102, name:"matias",age:40},
        {id:103, name:"sofia",age:45},
    ]);
});
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});