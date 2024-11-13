const endDate = new Date("18 Oct,2024 19:50:00").getTime();
const startDate = new Date().getTime();



 let x = setInterval(function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;

    const distancePending = endDate -now;

    //calculate days,min,hrs,secs
    //1 days = 24*60*60*1000 ms

    const oneDayInMills = (24*60*60*1000);
    const oneHourInMills =  (60*60*1000);
    const oneMinInMills = (60*1000);
    const oneSecondInMills = (1000);
    const days = Math.floor(distancePending / (oneDayInMills));
    const hrs = Math.floor((distancePending %(oneDayInMills) / (oneHourInMills)));
    const mins = Math.floor((distancePending %(oneHourInMills)) / (oneMinInMills));
    const secs = Math.floor((distancePending %(oneMinInMills)) / (oneSecondInMills));
//populate in Ui

document.getElementById("days").innerHTML  = days;
document.getElementById("hours").innerHTML  = hrs;
document.getElementById("minutes").innerHTML  = mins;
document.getElementById("seconds").innerHTML  = secs;

//calculate width percentage for progress bar 
const totalDistance = endDate - startDate;
const percentageDistance = (distanceCovered / totalDistance) *100;

//set width for progress bar
document.getElementById("progress-bar").style.width = percentageDistance + "%";

if(distancePending < 0 ){
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
}

}, 1000);