import * as moment from "moment";

const btn_plus: HTMLElement = document.getElementById("btn_plus");
const btn_minus: HTMLElement = document.getElementById("btn_minus");
const btn_start: HTMLElement = document.getElementById("btn_start");
const time = document.getElementById("time");
let score = 5;

btn_plus.addEventListener("click", function () {
  score += 1;
  time.innerText = `${score}`;
});

btn_minus.addEventListener("click", function () {
  score -= 1;
  time.innerText = `${score}`;
});

btn_start.addEventListener("click", function () {
  document.getElementById("all_timer").style.display = "none";
  document.getElementById("timer").style.display = "block";
  const time_end = document.getElementById("time_end");
  time_end.innerText = `${score} : 00`;
  score--;
  const mom_time = moment().add((score + 1) * 60 + 1, "seconds");
  setInterval(() => {
    const timer = moment().diff(mom_time, "seconds") * -1;
    console.log(timer);
    const seconds: number = timer % 60;
    if (seconds == 0) {
      if (seconds < 10) {
        time_end.innerText = `${score} : 0${seconds}`;
      }
      if (seconds >= 10) {
        time_end.innerText = `${score} : ${seconds}`;
      }
      if (score == 0) {
        window.location.reload();
      }
      score--;
    } else {
      if (seconds < 10) {
        time_end.innerText = `${score} : 0${seconds}`;
      }
      if (seconds >= 10) {
        time_end.innerText = `${score} : ${seconds}`;
      }
      if (timer <= 0) {
        window.location.reload();
      }
    }
  }, 1000);
});
