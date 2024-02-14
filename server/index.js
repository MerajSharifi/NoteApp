import express from "express"
import cors from "cors"
import notesRouter from "./notesrouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/notes", notesRouter)

app.listen(3005)