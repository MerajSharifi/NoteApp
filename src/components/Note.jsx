
export default function Note ({ id, text, date, deleteNote }) {
    const handleDeleteNote = () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            deleteNote(id);
        }
      };
    return (
        <div className="bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10">
            <h5 className="note-title min-h-[130px] font-poppins">
                {text}
            </h5>
            <div className="flex gap-10 justify-between items-center">
                <small className="font-roboto">{date.toLocaleDateString('en-GB')}</small>
                <i className="fa fa-trash-o" onClick={handleDeleteNote}></i>
            </div>
        </div>
    )
}