const timer = document.getElementById('TIME')


const evictionDate = new Date()
evictionDate.setTime(1659974400000)

// get the time until eviction date

console.log(evictionDate)



let updateInterval = setInterval(() => {
    const timeUntilEviction = evictionDate - Date.now()
    // Display the time until eviction date in days, hours, minutes, seconds
    // If at least one of the values is less than 10, add a 0 in front of it
    let days = Math.floor(timeUntilEviction / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeUntilEviction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeUntilEviction % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeUntilEviction % (1000 * 60)) / 1000)

    if (days < 10) {
        days = `0${days}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    if (timeUntilEviction < 0) {
        clearInterval(updateInterval)
        timer.innerHTML = 'GOOD FUCKING BYE'
    }

    // if the time is midnight, play a sound
    let now = new Date()
    console.log(now.getMinutes())
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        let spooky = new Audio('video0-3.mp3')
        spooky.play()
        document.getElementById('spookster').style.display = 'block'
        spooky.addEventListener('ended', () => {
            document.getElementById('spookster').style.display = 'none'
            sleep(1000).then(() => {
                if (days === '06') {
                    document.querySelector('body').style.backgroundColor = '#bbff00'
                } else if (days === '04') {
                    document.querySelector('body').style.backgroundColor = '#ffff00'
                } else if (days === '03') {
                    document.querySelector('body').style.backgroundColor = '#ffc800'
                } else if (days === '02') {
                    document.querySelector('body').style.backgroundColor = '#ff9100'
                } else if (days === '01') {
                    document.querySelector('body').style.backgroundColor = '#ff5500'
                } else if (days === '00') {
                    document.querySelector('body').style.backgroundColor = '#ff0000'
                }
            })
        })
    }

    timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
}, 1000)


// sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}