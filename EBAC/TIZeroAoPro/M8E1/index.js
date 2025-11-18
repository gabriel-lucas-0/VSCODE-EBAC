const servicos = [
  { id: 1, nome: "Banho e Tosa", descricao: "Banho completo para cães e gatos." },
  { id: 2, nome: "Consulta Veterinária", descricao: "Atendimento clínico para pets." }
];

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://blyad901901901_db_user:2gA1OsWneDZIq4PZ@teste.rlty91t.mongodb.net/")
    .then(() => console.log("Conectado ao MongooseDB."))
    .catch(err => console.error("Erro ao conectar ao MongooseDB.", err))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const User = mongoose.model('user', userSchema);

const express = require("express")
const port = 3000
const app = express()

const cors = require('cors')
app.use(cors({
    origin: "*"
}))

app.use(express.json())
app.post('/register', async(req, res) => {
    console.log("Log ", req)
    const findAnEmail = await User.findOne({email: req.body.email})
    if (findAnEmail) {
        res.status(403).json({message: "Forbidden"})
    }
    const newUser = new User({name: req.body.name, email: req.body.email, message: req.body.message});
    newUser.save();
    res.status(201).json(newUser)    
})

app.listen(port, ()=>{
    console.log(`Server is listening on: ${port}` )
})
