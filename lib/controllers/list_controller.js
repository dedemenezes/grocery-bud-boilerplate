import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'groceries']
  connect() {
    // console.log(this.inputTarget)
    // console.log(this.groceriesTarget)
    console.log(this.element)
  }

  // reveal the input field
  // reveal the save button
  // hide the remove button
  // hide the edit button
  // hide the item name
  add(event) {
    event.preventDefault()
    const itemHTML = `
      <li class="list-group-item" data-controller="list-item">
        <div data-list-item-target="text">${this.inputTarget.value}</div>
        <input type="text" class="form-control d-none" data-list-item-target="input"/>
        <button type="button" class="btn btn-success d-none" data-list-item-target="saveButton" data-action="click->list-item#save">Save</button>
        <button type="button" class="btn btn-secondary" data-list-item-target="editButton" data-action="click->list-item#edit">Edit</button>
        <button type="button" class="btn btn-danger" data-list-item-target="removeButton" data-action="click->list-item#remove">Remove</button>
      </li>
    `
    this.groceriesTarget.insertAdjacentHTML('beforeend', itemHTML)
    this.inputTarget.value = ''
  }
}
