window.onload = () => {
  const day = document.getElementById('day');
  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const second = document.getElementById('second');
  
  const element = {
    day, hour, minute, second
  }
  
 setInterval(() => {
   changeTime(element);
 }, 1000);
}

const changeTime = (element) => {
  const time = new Date();
  const day = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  
  
  element.day.innerHTML = formatNumber(day);
  element.hour.innerHTML = formatNumber(hour);
  element.minute.innerHTML = formatNumber(minute);
  element.second.innerHTML = formatNumber(second);
}

const formatNumber = (number) => {
  return number >= 10 ?number : `0${number}`;
}