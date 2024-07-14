//calling api + error handling
const joke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await response.json();
    // adding the json response of the api to the jokes-container inner text
    document.getElementById("jokes-container").innerText = json.joke;
  } catch (error) {
    console.log(error);
  }
};

// adding event listener to button and calling the joke function
document.getElementById("btn").addEventListener("click", () => {
  joke();
});
