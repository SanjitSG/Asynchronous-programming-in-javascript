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
/*
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
*/

/*
const promiseOne = () => {
  return new Promise((resolve, reject) => {
    const callReceived = true;

    if (callReceived) {
      resolve("First Call Received...");
    } else {
      reject("First Call Declined!");
    }
  });
};

const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    const callReceived = false;

    if (callReceived) {
      resolve("Second Call Received...");
    } else {
      reject("Second Call Declined!");
    }
  });
};*/

// * consuming a promise using .then().catch()
/*
promiseOne()
  .then((data) => {
    console.log(data);
    promiseTwo()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((error) => {
    console.log(error);
  }); */

// * consuming a promise using Async/Await
/*
// TODO - baking a pizza

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const setTemperature = true;

      if (setTemperature) {
        resolve("Preheating started...");
      } else {
        reject("Task One failed !");
      }
    }, 1000);
  });
};

const prepareIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ingredientsReady = true;

      if (ingredientsReady) {
        resolve("Ingredients are ready...");
      } else {
        reject("Task two failed !");
      }
    }, 500);
  });
};

const addToping = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const toppings = true;

      if (toppings) {
        resolve("Toppings added...");
      } else {
        reject("Task three failed !");
      }
    }, 2000);
  });
};

const baking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const putPizzaInOven = true;

      if (putPizzaInOven) {
        resolve("Pizza is cooking!! Smells good");
      } else {
        reject("Task Four failed !");
      }
    }, 600);
  });
};

const bakePizza = async () => {
  try {
    const taskOne = await preHeatOven(); //1000ms
    console.log(taskOne);

    const taskTwo = await prepareIngredients(); //500ms
    console.log(taskTwo);

    const taskThree = await addToping(); //2000ms
    console.log(taskThree);

    const taskFour = await baking(); //600ms
    console.log(taskFour);

    console.log("Your Pizza is ready.....");
  } catch (error) {
    console.log(error);
  }
};

bakePizza();
