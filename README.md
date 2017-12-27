Assignment for Committee for Children

General Info:
===================

All react files are under src. The two components I added are the Input Search and Input Search Item. The search item handles the click event for the search and the input search handle the key press events for the search. I used crate-react-app for the initial project creation. It created the App files in src. I modified the App.css and added my own css.

You can use these commands from the root folder to run the application:

1. npm run start
2. Open http://localhost:3000 in a browser

Problem assignment:
===================
Create a reusable component to provide an auto-completing drop-down list.
Don't use a ready-made component even though many are available in all frameworks
 
Given and array of options in this format (see MOCK_DATA.json):
 
const options = {
    { label: "Steve Austin", : value: 1 },
    { label: "Jamie Sommers", : value: 2 },
    { label: "Rick Deckard", : value: 3 },
    { label: "John Conner", value: 4 },
    { label: "Gaius Baltar", value: 5 },
    { label: "John Smith" value: 6 },
    { label: "Seven Of Nine", : value: 7 },
    .
    .
    .
}
 
Display an input field that autocompletes as the user is typing.
    If user types s or S, 'Steve Austin' and any other options that begin with S will be displayed
Matching elements will be displayed in a dropdown list below the input field.
Component should take 'options' as input and notify upon selection
  (item is selected either by pressing 'enter' or clicking on item in the list)
Result of the selection should display selected 'label' and 'value' as text below the input field.