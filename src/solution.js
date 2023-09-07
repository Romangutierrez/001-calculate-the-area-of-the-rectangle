// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  // Check if length and width are valid positive numbers
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    return "Invalid input. Both length and width must be positive numbers.";
  }

  // Calculate the area by multiplying length and width
  const area = length * width;
  return area;
}

// Function to get user input and calculate the area
function calculateAreaWithUserInput() {
  // Prompt the user for input
  const lengthStr = prompt("Enter the length of the rectangle:");
  const widthStr = prompt("Enter the width of the rectangle:");

  // Convert input strings to numbers
  const length = parseFloat(lengthStr);
  const width = parseFloat(widthStr);

  // Calculate the area using the calculateRectangleArea function
  const area = calculateRectangleArea(length, width);

  // Check if the result is valid
  if (typeof area === "number") {
    console.log(`The area of the rectangle with length ${length} and width ${width} is: ${area}`);
  } else {
    console.log(area); // Display the error message
  }
}

// Call the function to calculate area with user input
calculateAreaWithUserInput();
