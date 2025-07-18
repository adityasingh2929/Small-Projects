const body = document.querySelector("body");

document.getElementById("submit").addEventListener("click", (e) => {
  const weight_input = document.getElementById("weight").value;
  const height_input = document.getElementById("height").value;
  const final_height = height_input / 100;

  const state = document.getElementById("evaluation");
  const val = document.getElementById("value");

  const initial_bmi = weight_input / Math.pow(final_height, 2);
  const bmi = initial_bmi.toFixed(2);

  console.log(bmi);

  val.innerHTML = bmi;

  if (weight_input === "" || weight_input <= 0 || isNaN(weight_input)) {
    state.innerHTML = "Please enter Valid values";
  } else if (height_input === "" || height_input <= 0 || isNaN(height_input)) {
    state.innerHTML = "Please enter Valid values";
  } else if (bmi < 18.5) {
    state.innerHTML = "Skinny!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    state.innerHTML = "Healthy!";
  } else {
    state.innerHTML = "Obese!";
  }
});
