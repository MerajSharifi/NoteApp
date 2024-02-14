import { useState, useEffect } from "react";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
import Search from "../components/Search";
import { getNotes, saveNote, deleteNote } from "../utils/api";

export default function Notes () {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("")
    const [newNoteInput, setNewNoteInput] = useState("");


    useEffect(() => {
        const loadNotes = async () => {
            const ns = await getNotes()
            setNotes(ns)
        }
        loadNotes()
    }, [])

    const addNote = async (text) => {
        const newNotes = await saveNote({ text })
        setNotes(newNotes)
    }

    const removeNote = async (id) => {
        const newNotes = await deleteNote(id)
        setNotes(newNotes)
    }

    return (
        <div className="flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto">
            <Search handleSearchChange={setSearch} />
            <CreateNote handleSaveNote={addNote}
            newNoteInput={newNoteInput}
            setNewNoteInput={setNewNoteInput}
             />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {notes.length === 0 ? (
                <div className="empty-notes-wrapper">
                    You don't have any notes yet...
                </div>) : (
                    notes
                    .filter(n => n.text.includes(search))
                    .map(n => (
                        <Note text={n.text} 
                        date={n.date} 
                        id={n._id} 
                        handleDelete={removeNote} 
                        key={n.id} />
                    ))
                )}
            </div>
        </div>
    )
}