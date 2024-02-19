import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'saveButton', 'editButton', 'removeButton', 'text']
  connect() {
  }

  remove() {
    // console.log(this.element)
    this.element.remove()
  }

  edit() {
    // reveal the input field
    this.inputTarget.classList.remove('d-none')
    // reveal the save button
    this.saveButtonTarget.classList.remove('d-none')
    // hide the remove button
    this.removeButtonTarget.classList.add('d-none')
    // hide the edit button
    this.editButtonTarget.classList.add('d-none')
    // hide the item name
    this.textTarget.classList.add('d-none')

    // Pre-Fill the input with the actual item name
    this.inputTarget.value = this.textTarget.innerText
  }

  save() {
    this.textTarget.innerText = this.inputTarget.value
    // hide the input field
    this.inputTarget.classList.add('d-none')
    // hide the save button
    this.saveButtonTarget.classList.add('d-none')
    // display the remove button
    this.removeButtonTarget.classList.remove('d-none')
    // display the edit button
    this.editButtonTarget.classList.remove('d-none')
    // display the item name
    this.textTarget.classList.remove('d-none')
  }
}
