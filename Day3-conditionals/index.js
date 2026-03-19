let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
switch (choice) {
  case '1':
    console.log("Starting the game...");
    break;
  case '2':
    console.log("Opening settings...");
    break;
  case '3':
    console.log("Exiting the game...");
    break;
  default:
    console.log("Invalid option, please try again.");
}



let numbers = [1, 2, 3, 4, 5];
 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    console.log("Found 3! Exiting the loop.");
    break;  // Exit the loop when 3 is found
  }
  console.log(numbers[i]);
}



