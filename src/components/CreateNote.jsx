import { useState } from "react";

export default function CreateNote({ handleSaveNote, newNoteInput, setNewNoteInput }) {
  const characterLimit = 200;

  const handleNoteChange = (e) => {
    if (e.target.value.length > characterLimit) alert("Stop telling stories");
    else setNewNoteInput(e.target.value);
  };

  const handleSave = () => {
    handleSaveNote(newNoteInput);
    setNewNoteInput(""); 
  };

  return (
    <div className="bg-[#67d7cc] rounded-lg p-3 shadow-lg mt-2">
      <textarea
        cols="10"
        rows="8"
        className="bg-transparent placeholder-gray-700 text-gray-800 w-full outline-none font-poppins"
        placeholder="Type your note"
        value={newNoteInput}
        onChange={handleNoteChange}
      />
      <div className="flex gap-10 justify-between items-center font-roboto">
        <small>{characterLimit - newNoteInput.length} remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
