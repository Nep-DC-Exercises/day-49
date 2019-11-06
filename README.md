# First React App

## Date: 11/5/19 W11 D2 D49

### Summary

State. Props. State. Props. These terms are repeated so often in React and for good measure as they're essential to how the framework operates. This exercise started with running the `create-react-app` command in the terminal after installing it globally.

We refactored our chuck norris project which was used earlier in the cohort when learning fetch and the 'then' train to access JSON. One concept I had a hard time grasping was how components render a second time if you use the setState method. This was frustrating in my dropdown component which makes a call to the chuck norris API to populate a list of all the potential joke categories. Since the state of this dropdown list was initially set to null, my map function would try to map over a null data type on the first render. However, the data would populate on the second render because I changed the state of the dropdown component to contain this data from the API fetch. To get around this issue, I set the initial value to an empty array which works with the map function call and populates the dropdown list on the second render after the data is received.
