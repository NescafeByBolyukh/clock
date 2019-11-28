let getId = x => document.getElementById(x);
setInterval(function () {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
	
    let day = newDate.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = newDate.getFullYear();

    document.getElementById('sec').style.transform = `translate(-50%, -100%) rotate(${seconds*6}deg)`;
    document.getElementById('min').style.transform = `translate(-50%, -100%) rotate(${6*(minutes + (1/60)*seconds)}deg)`;
    document.getElementById('hour').style.transform = `translate(-50%, -100%) rotate(${30*(hours + (1/60)*minutes)}deg)`;
    document.getElementById('new').innerHTML = day + ' ' + months[newDate.getMonth()] + ' ' + year;

}, 1000)


