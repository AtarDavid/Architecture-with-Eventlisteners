import "@scss/styles.scss"
import { noteStorage } from "./Storage"
import { domElements } from "./helper"

const { addNoteButton, addNoteInput, noteDiv } = domElements

addNoteInput.addEventListener("change", () => {
  const note = addNoteInput.value
  if (note) {
    noteStorage.emit("addItem", note)
    addNoteInput.value = ""
  }
})

