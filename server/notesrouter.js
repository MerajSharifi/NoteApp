import { Router } from "express"
import Note from "./noteschema.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const router = Router()

mongoose.connect(process.env.MONGODB_URI, {
    dbName: "noteapp"
})

router.get("/", async (req, res) => {
    const notes = await Note.find({})
    res.json(notes)
})

router.post("/", async (req, res) => {
    const newNote = new Note({
        text: req.body.text
    })

    await newNote.save()

    const notes = await Note.find({})
    res.json(notes)
})

router.delete("/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    const notes = await Note.find({})
    res.json(notes)
})

export default router;