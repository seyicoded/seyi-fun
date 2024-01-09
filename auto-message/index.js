const robot = require("robotjs");

// Set a delay to give you time to focus on the input area
const delay = 5000;

// Simulate typing "Hello, World!" with a delay between key presses
setTimeout(() => {
    
    for (let i = 0; i < 50; i++) {
        robot.typeString("I love you!");
        robot.keyTap("enter");
    }
}, delay);