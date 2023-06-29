import express from "express";
let app = express();

app.get("/materia", (req, res,next) => {
    res.send([
        "Inteligencia Artificial",
        "Programación Móvil"
    ])
});

app.listen(3000,()=>{
    console.log("> Api de materias funcionando.")
});