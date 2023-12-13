"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { errorMessage: message, errorCode: code };
};
generateError("An error occurred", 500);
