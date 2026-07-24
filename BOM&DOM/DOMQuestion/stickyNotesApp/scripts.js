let notes = document.getElementById("notes")
let addNote = document.getElementById("addNote")
let message = document.getElementById("message")
let notesContainer = document.getElementById("notesContainer")

addNote.addEventListener("click", function () {
    if (notes.value.trim() === "") {
        message.innerText = "Please enter a value"
    }
    else {
        let noteDiv = document.createElement("div");
        noteDiv.style.display = "flex"
        noteDiv.style.margin = "5px"
        noteDiv.style.gap = "15px"
        let note = document.createElement("p")
        note.innerText = `${notes.value}`

        let del = document.createElement("button");
        del.innerText = "Delete"

        del.addEventListener("click", function () {
            noteDiv.remove();
        })

        noteDiv.appendChild(note)
        noteDiv.appendChild(del)
        notesContainer.appendChild(noteDiv);

        notes.value = "";
        message.innerText = "Notes Added Successfully"

        setTimeout(function () {
            message.innerText = "";
        }, 2000);
    }


})