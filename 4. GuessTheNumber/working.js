const num = Math.floor(Math.random() * 100 + 1);
const prev_guess_val = document.getElementById("prev_guess_info_id");
const guess_left_counter = document.getElementById("guess_info_id");
let c = 10;
const main_result_info = document.getElementById("main-info");
const hint_info = document.querySelector("#hint");

console.log(num);

document.getElementById("submit").addEventListener("click", (e) => {
  var guess_value = document.getElementById("guess").value;
  if (guess_value === "" || guess_value <= 0 || isNaN(guess_value)) {
    main_result_info.innerHTML = "PLEASE ENTER A VALID NUMBER!";
  }
  if (num == guess_value) {
    c = c - 1;
    main_result_info.innerHTML = `You've Guessed it Right! YOU WIN!! <br> It took you ${
      10 - c
    } attempts!`;
  } else {
    c = c - 1;
    if (c == 0) {
      main_result_info.innerHTML = `AAAH, Better Luck Next Time! It was ${num}`;
    } else if (num > guess_value) {
      prev_guess_val.innerHTML = guess_value;
      guess_left_counter.innerHTML = c;
      hint_info.innerHTML = "Go Higher!";
    } else if (num < guess_value) {
      prev_guess_val.innerHTML = guess_value;
      guess_left_counter.innerHTML = c;
      hint_info.innerHTML = "Go Lower!";
    }
  }
});
