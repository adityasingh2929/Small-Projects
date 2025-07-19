// JS Code to be written here.

const clock = document.getElementById('clock');

let date = new Date();
// Now every time the page reloads, this will run and show the latest time.
console.log(date.toLocaleTimeString());

// But we want to show the latest time all the time, like all the time the clock should be getting updated.
// So we'll use: 'setInterval' method, which tells that in which intervals, we've to run the given method again and again.

// second parameter is time in  milliseconds.
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    // Note that date.toLocaleTimeString() method was responsible for us to show the latest time.
    clock.innerHTML = date.toLocaleTimeString();
},1000)