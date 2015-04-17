Create, edit, and view short notes.

Notes are just small textual items, like to-do lists.

Notes should be stored using browser local storage.

The app should be usable on a standard mobile browser.

It displays a list of todos for a user to see. This list will grow and shrink as the user adds and removes todos.

It accepts text in an <input> for entry of new todos. Hitting the <enter> key creates the new item and displays it in the list below.

It provides a checkbox to toggle between complete and incomplete states for each todo. New todos start as incomplete.

It displays the number of incomplete todos and keeps this count updated as new todos are added and existing todos are completed.

It provides links for the user to navigate between lists showing all, incomplete, and completed todos.

It provides a button to remove all completed todos and informs the user of the number of completed todos. This button will not be visible if there are no completed todos.

It provides a button to remove a single specific todo. This button displays as a user hovers over a todo and takes the form of a red X.

It provides a checkbox to toggle all existing todos between complete and incomplete states. Further, when all todos are completed this checkbox becomes checked without user interaction.

It allows a user to double click to show a textfield for editing a single todo. Hitting the <enter> key or moving focus outside of this textfield will persist the changed text.

It retains a user's todos between application loads by using the browser's localstorage mechanism.