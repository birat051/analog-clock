setInterval(setTime,1000)

const hourHand=document.getElementById('hand-hour')
const minuteHand=document.getElementById('hand-minute')
const secondHand=document.getElementById('hand-second')

function setTime()
{
    const currentDate=new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(hourHand,hoursRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(secondHand,secondsRatio)
}

function setRotation(element,rotationValue)
{
    element.style.setProperty('--rotation',rotationValue*360)
}

setTime()