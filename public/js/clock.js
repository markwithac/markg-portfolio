const clock = document.getElementById('clock')
const theDate = document.getElementById('date')

window.onload = displayClock();
function displayClock(){
  let display = new Date()
  let hour = display.getHours();
  let min = display.getMinutes();
  let sec = display.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec)

  clock.innerHTML = `${hour}: ${min}: ${sec}`;
  setTimeout(displayClock, 1000); 

  theDate.innerHTML = display.toDateString()
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}