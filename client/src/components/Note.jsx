
export default function Note ({ text, date, id, handleDelete }) {
    const parseDate = (d) => (
        (new Date(Date.parse(d))).toLocaleDateString('en-GB')
    )
    return (
        <div className="bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10">
            <h5 className="note-title min-h-[130px] font-poppins">
                {text}
            </h5>
            <div className="flex gap-10 justify-between items-center">
                <small className="font-roboto">{parseDate(date)}</small>
                <i className="fa fa-trash-o" onClick={() => handleDelete(id)}></i>
            </div>
        </div>
    )
}