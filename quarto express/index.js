const express = require ("express")
const app = express()

    //isso é uma rota
    app.get("/", function(req, res){
        res.send("meu app rodando aqui")
    })

    //uma rota
    app.get("/sobre", function(req, res){
        res.send("minha parte sobre")
    })
    //uma rota
    app.get("/home", function(req, res){
        res.send("aqui é o home")
    })

    app.get('/ola/:nome/:sobrenome', function(req, res){
        res.send("ola " +req.params.nome+ " " +req.params.sobrenome)
    })


app.listen(8086, function(){
    console.log("Servidor rodando em http://localhost:8086")

})
