// Helper
import { noteStorage } from "./Storage"
export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  noteDiv: null
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map(
      (note, index) => {
        return `
        <div class="note col-lg-3">
          ${note}
          <button id=${index} type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
        </div>
      `
      }
    )
    .join("")

  // Only if I have the notes I can target them and add the eventListners
  domElements.noteDiv = document.querySelectorAll(".note")
  targetNotes();
}

const targetNotes = () => {
  // Check if we have a note and eventually attach an eventlistner
  if (domElements.noteDiv !== null)
    domElements.noteDiv.forEach(oneDiv => {
      oneDiv.lastElementChild.addEventListener("click", () => {
        const id = oneDiv.lastElementChild.id;
        // trigger
        noteStorage.emit("removeItem", id)
      })
    })
}