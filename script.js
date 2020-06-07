const clock = document.querySelector('.clock')
const stopWatchBtn = document.querySelector('.stopwatch-btn')
const stopWatchScreen = document.querySelector('.stopwatch-screen')
const offBtn = document.querySelector('.off-btn')

let timer, interval;

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

    
    timer = setTimeout(showTime, 1000)
}

showTime()

function startTimer() {
    let a = 60

    interval = setInterval(() => {
        clearTimeout(timer)
        clock.textContent = a + 'sec'
        if(a <= 60 && a > 0) {
            a--
        } else {
            a = 0
            clearInterval(interval)
        }

        offBtn.style.display = 'inline'
    },1000)
}

function stopTimer() {
    clearInterval(interval)
    offBtn.style.display = 'none'
    showTime()
}

stopWatchBtn.addEventListener('click', startTimer)

offBtn.addEventListener('click', stopTimer)
