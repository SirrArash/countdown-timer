const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const variable = "1 jan 2024";

function countdown() {
  //-------   Extract Time   ---------
  const desiredDate = new Date(variable);
  const currentDate = new Date();
  //-------   Calculate each board   ---------
  const totalSecond = (desiredDate - currentDate) / 1000;
  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor((totalSecond / 3600) % 24);
  const minutes = Math.floor((totalSecond / 60) % 60);
  const seconds = Math.floor(totalSecond % 60);

  dayEl.innerHTML = days;
  hourEl.innerHTML = formatTime(hours);
  minuteEl.innerHTML = formatTime(minutes);
  secondEl.innerHTML = formatTime(seconds);

//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
