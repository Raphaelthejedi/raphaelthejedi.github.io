
const navnToggle = document.querySelector('.nav-toggle')
const linked = document.querySelector('.links')

navnToggle.addEventListener('click', function() {
  linked.classList.toggle('appear')
})

const nav = document.querySelector('.nav-toggle')
nav.addEventListener('click', function() {
  nav.classList.toggle('rotate')
})

const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let futureDate = new Date(2023,8,9,12,0,0)

  const futureTime = futureDate.getTime()

  function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

    const oneDay = 24 * 60 * 60 * 1000 
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = t/oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay)/ oneHour)
    let minutes = Math.floor((t % oneHour / oneMinute))
    let seconds = Math.floor((t % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function format(item) {
        if(item < 10) {
          return (item = `0${item}`)
        }
        return item
      }
      
    items.forEach(function(item,index) {
        item.innerHTML = format(values[index])
      })
  }

  let something = setInterval(getRemainingTime, 1000)


getRemainingTime()

//reveal element//
window.addEventListener("scroll", showrel)
    function showrel() {
      var reveals = document.querySelectorAll('.showrel')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 10  
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }
//end of reveal element//