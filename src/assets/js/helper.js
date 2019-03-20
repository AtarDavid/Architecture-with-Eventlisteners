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
        <div id=${index} class="note col-lg-3">
        <div class="text">${note}</div>
          <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
        </div>
      `
      }
    )
    .join("")

  // Only if I have the notes I can target them and add the eventListeners
  domElements.noteDiv = document.querySelectorAll(".note")
  targetNotes();
}

const targetNotes = () => {
  // Check if we have a note and eventually attach an eventlistner
  if (domElements.noteDiv !== null)
    domElements.noteDiv.forEach(oneDiv => {
      oneDiv.lastElementChild.addEventListener("click", () => {
        console.log(event)
        const id = oneDiv.id;
        // trigger
        noteStorage.emit("removeItem", id)
      })
    })
}