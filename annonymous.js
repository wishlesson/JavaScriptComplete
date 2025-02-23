function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

//Below function is using Annonymous function
textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}".`);
});

//Arrow function
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});
