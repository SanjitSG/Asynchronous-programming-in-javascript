// * 1. callback hell example
/*
const showMessage = (message) => {
  console.log(message);
};

const firstMessage = (callback) => {
  setTimeout(() => {
    showMessage("Hello! im first message");
    callback();
  }, 2000);
};

const secondMessage = () => {
  showMessage("Im Second message");
};

firstMessage(secondMessage); 

*/

// * 2. Promises
//  creating a promise

const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (randomNum < 4) {
      resolve("Well don! You Guessed Right.");
    } else {
      reject("Oops! You guessed wrong! unlucky");
    }
  }, 2000);
});

// consuming a promise
