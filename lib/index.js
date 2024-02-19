import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()



// 1. Create a new stimulus controller ✌️
// 2. Register the stimulus controller
import ListController from './controllers/list_controller.js'
Stimulus.register('list', ListController)
// 3.0 Bind the controller to the HTML ✌️
// 3. Get the element (INPUT)
// 4. Listen to the SUBMIT event
// 5. Show the item on the list
import ListItemController from './controllers/list_item_controller.js'
Stimulus.register('list-item', ListItemController)
