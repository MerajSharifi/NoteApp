import { useEffect, useState } from "react";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
import Search from "../components/Search";


export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNoteInput, setNewNoteInput] = useState("");
  const [search, setSearch] = useState("");

 
  
  const addNote = (text) => {
    setNotes(prev => (
        [...prev, { text, date: new Date(), id: prev.length + 1 }]
    ))
}

  const deleteNote = (id) => {
    setNotes((prevList) => prevList.filter((note) => note.id !== id));
  };

  return (
    <div className="flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto">
      <Search handleSearchChange={setSearch} />
      <CreateNote
        handleSaveNote={addNote}
        newNoteInput={newNoteInput}
        setNewNoteInput={setNewNoteInput}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {notes.length === 0 ? (
          <div className="empty-notes-wrapper">
            You don't have any notes yet...
          </div>
        ) : (
          notes
            .filter((n) => n.text.includes(search))
            .map((n) => (
              <Note
                key={n.id}
                id={n.id}
                text={n.text}
                date={n.date}
                deleteNote={deleteNote}
              />
            ))
        )}
      </div>
    </div>
  );
}
