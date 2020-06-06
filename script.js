const clock = document.querySelector('.clock')

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

    setTimeout(showTime, 1000)
}

showTime()