// Define the student object
const student = {
  name: "John Doe", // A property called name
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj); // Use Object.keys() to retrieve an array of keys
}

// Test the function with the student object
const keys = getKeys(student);

// Log the output to the console
console.log("Keys in the object:", keys);

// Display the result on the webpage
document.body.innerHTML = `<div>Keys in the object: ${keys.join(", ")}</div>`;
