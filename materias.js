import express from "express";
let app = express();

app.get("/materia", (req, res,next) => {
    res.send([
        "Inteligencia Artificial",
        "Programación Móvil"
    ])
});

app.post("/materiaPost/:nombre",(req, res,next) => {
    try {
        const nombre = req.params.nombre;
        return res.json({
            materia:nombre
        })
    } catch (error) {
        console.log("Esto fallo: ", error)
    }

})

app.listen(3000,()=>{
    console.log("> Api de materias funcionando.")
});