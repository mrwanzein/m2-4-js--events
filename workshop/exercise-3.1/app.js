const main = document.querySelector('#main');
      
      let date = new Date();

      let dayOfTheWeek;

      switch(date.getDay()) {
    case 0:
      dayOfTheWeek = "Sunday";
      break;
    case 1:
      dayOfTheWeek = "Monday";
      break;
    case 2:
      dayOfTheWeek = "Tuesday";
      break;
    case 3:
      dayOfTheWeek = "Wednesday";
      break;
    case 4:
      dayOfTheWeek = "Thursday";
      break;
    case 5:
      dayOfTheWeek = "Friday";
      break;
    case 6:
      dayOfTheWeek = "Saturday";
      }

      main.innerHTML = `Current time is: ${dayOfTheWeek}  ${date.getHours()}:${date.getMinutes()}`;