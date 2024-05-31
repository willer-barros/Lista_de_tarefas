const express = require('express')
const path = require('path')
const app = express()

//configuracao padrao
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

//criando tarefas
var tarefas = ['Arrumar o quarto', "Comprar no supermercado", "Limpar a casa", "Cagar no chão"]

//rotas
app.get('/', (req, res)=>{
    res.render('index', {tarefasList:tarefas})
})

//deletar
app.get('/deletar/:id', (req, res)=>{
    tarefas = tarefas.filter((val, index) => {
            return index != req.params.id;
    })
    res.redirect('/')      
})

app.listen(5000, ()=>{
    console.log("server rodando")
})