const clock = document.querySelector('.clock')
const stopWatchBtn = document.querySelector('.stopwatch-btn')
const stopWatchScreen = document.querySelector('.stopwatch-screen')
const offBtn = document.querySelector('.off-btn')

let showClock, stopwatch;

function showTime() {
    const DATE = new Date()
    let hour = DATE.getHours()
    let minute = DATE.getMinutes()
    let second = DATE.getSeconds()

    hour = (hour < 10) ? '0' + hour : hour
    minute = (minute < 10) ? '0' + minute : minute
    second = (second < 10) ? '0' + second : second

    const time = hour + ':' + minute + ':' + second
    clock.textContent = time

    
    showClock = setTimeout(showTime, 1000)
}

showTime()

function startTimer() {
    clearTimeout(showClock)
    
    let a = 60
    stopwatch = setInterval(() => {
        clock.textContent = a + 'sec'
        if(a <= 60 && a > 0) {
            a--
        } else {
            a = 0
            clearInterval(stopwatch)
        }
        offBtn.style.display = 'inline'
        stopWatchBtn.style.display = 'none'
    },1000)
}

function stopTimer() {
    clearInterval(stopwatch)
    stopWatchBtn.style.display = 'inline'
    offBtn.style.display = 'none'
    showTime()
}

stopWatchBtn.addEventListener('click', startTimer)

offBtn.addEventListener('click', stopTimer)
