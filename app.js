import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.get('/api/audiovisual/', (req, res) => {
    console.log("entro a la ruta home")
  res.send('pistaches')
})

app.post('/api/audiovisual/', (req, res) => {
    console.log("entro a la ruta home de post")
    const products = [
        {name: "cámara perro", id: "1"},
        {name: "micro y ya", id: "2"}
    ]
  res.json({"products":products});
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
