// Start here

// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
let userName = prompt("What is your name?");
alert(`Hi ${userName}!`)

// Step 2 - Food choice
let foodChoice = prompt("What would you like to order? (1 for Pizza, 2 for Pasta, 3 for Salad)");
alert(`You've selected ${foodChoice == 1 ? 'Pizza' : foodChoice == 2 ? 'Pasta' : 'Salad'}.`);
// Step 3 - Subtype Choice
let subtypeChoice = prompt(`Choose a subtype for your ${foodChoice == 1 ? 'Pizza' : foodChoice == 2 ? 'Pasta' : 'Salad'} (e.g., Margherita for Pizza, Spaghetti for Pasta, Caesar for Salad)`);
alert(`You've selected ${subtypeChoice}.`);

// Step 4 - Age
let ageGroup = prompt("Is this meal for a child or an adult?");
alert(`You've ordered a ${subtypeChoice} ${foodChoice == 1 ? 'Pizza' : foodChoice == 2 ? 'Pasta' : 'Salad'} for an ${ageGroup}.`);

// Step 5 - Order Confirmation
let orderConfirmation = prompt("Would you like to confirm your order? (yes or no)");
alert(orderConfirmation.toLowerCase() == 'yes' ? "Thank you! Your meal will be prepared." : "No worries! Hope to see you again soon.");
