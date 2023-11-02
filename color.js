function time() {
    let clock = new Date();
    let hr = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let ampm = hr >= 12 ? "PM" : "AM";

    let hours = document.querySelector('#hours');
    hours.innerHTML = hr < 10 ? "0" + hr : hr;

    let min = document.querySelector('#minutes');
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;

    let sec = document.querySelector('#seconds');
    sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    let ampmSpan = document.querySelector('#ampm');
    ampmSpan.innerHTML = ampm;

    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(time, 1000);