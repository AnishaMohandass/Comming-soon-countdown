const countdown = document.querySelector('.countdown');
const commingsoon = document.querySelector('.commingsoon');

const launchdate = new Date('dec 2, 2018 12:00:00').getTime(); // to set launch date

const intvl = setInterval( () => {         // to update every second
    
    const now = new Date().getTime();   //to get today's date

    const distance = launchdate - now;  //distance from today to launch date

    const days = Math.floor( distance / (1000 * 60 * 60 * 24) ); 
    const hours = Math.floor ( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    const mins =  Math.floor ( (distance % (1000 * 60 * 60)) / (1000 * 60) );
    const sec =  Math.floor ( (distance % (1000 * 60)) / 1000 );

    //to display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${sec}<span>Seconds</span></div> `;


    if (distance < 0) {
        clearInterval(intvl);  // to stop countdown
        commingsoon.style.display = 'none';
        countdown.innerHTML = 'Launched !';
    }

}, 1000);