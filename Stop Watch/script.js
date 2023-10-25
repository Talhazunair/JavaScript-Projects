let startTime;
let elapsedTime=0;
let timerInterval;
function formatTime(time)
{
    const minutes=Math.floor(time / 60000);
    const seconds=((time % 60000)/1000).toFixed(1);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}
function updateDisplay()
{
    const display=document.getElementById('display');
    display.textContent=formatTime(elapsedTime);
}
function startStopwatch()
{
    startTime=Date.now() - elapsedTime;
    timerInterval=setInterval(function()
    {
        elapsedTime=Date.now() - startTime;
        updateDisplay();
    }),100;
}
function stopStopwatch()
{
    clearInterval(timerInterval);
}
