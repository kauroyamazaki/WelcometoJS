function checkAge() {
    let age = prompt("Please enter your age:");
  
        if (age >= 25) {
        alert("Congrats!");
        } else {
        alert("Too young!");
        }
    }

function checkNum() {
    let num = prompt("Please enter a number:");

        if (num < 100) {
        alert("That's less than 100");
        } else {
        alert("That's 100 or more that a 100.");
        }
    }
function printNum() {
    for (let i = 0; i <= 30; i++) {
        console.log(i);
        }
        alert("Nasa Console ang Numbers");    
        
    }
function printEven() {
        for (let i = 0; i <= 40; i += 2) {
          console.log(i);
        }
        alert("Nasa Console ang Numbers");  
      }
function printThree() {
    for (let i = 40; i >= 10; i--) {
        if (i % 3 === 0) {
        console.log(i);
        }
        }
        alert("Nasa Console ang Numbers");     
    }