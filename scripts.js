const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Halts default submission form 

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again.";
      console.error(
        new Error("Both inputs are required but one or both were missing.")
      );
      return; // Stops code from running if no values are provided
    }

    const divideConvertToNumber = Number(dividend);
    const dividerConvertToNumber = Number(divider); // If a string is submitted

    if (isNaN(divideConvertToNumber) || isNaN(dividerConvertToNumber)) {
      throw new Error("Invalid number provided in one or both inputs.");
    }

    if (dividerConvertToNumber === 0) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again.";
      console.error(new Error("Division by zero error"));
      return; // Halts any execution if division is zero
    }

    // Performs division and shows answer
    const divisionResult = Math.floor(
      divideConvertToNumber / dividerConvertToNumber
    );
    result.innerText = divisionResult;
  } catch (error) {
    // Handle errors 
    document.body.innerHTML =
      "<h1>Something critical went wrong. Please reload the page.</h1>";
    console.error(error); // Reloads page after showing the error
    // 
  }
});
  