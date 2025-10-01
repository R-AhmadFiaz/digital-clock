const clock = document.getElementById("time")

// setInterval a method that want just updation duration and update values till the programm stop

setInterval(function(){
    let time = new Date() // js contain both date and time in Date()
    // we can extract date and time from it by applying functions

    clock.innerText = time.toLocaleTimeString()
},1000)
