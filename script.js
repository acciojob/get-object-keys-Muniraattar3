// student object in the app
const student = {
  name: "John Doe",
  age: 25
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Display the keys on the webpage
document.body.innerHTML = `<div id="output">Keys in the object: ${getKeys(student).join(", ")}</div>`;
