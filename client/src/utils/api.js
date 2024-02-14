
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getNotes = async () => {
    const res = await fetch(baseUrl + "/notes")
    if (res.ok) {
        const notes = await res.json()
        return notes
    }
}

export const saveNote = async (note)  => {
    const res = await fetch(baseUrl + "/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    if (res.ok)
        return await res.json()
}

export const deleteNote = async (id) => {
    const res = await fetch(`${baseUrl}/notes/${id}`, {
        method: "DELETE"
    })
    if (res.ok)
        return await res.json()
}