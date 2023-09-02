// Password page //

const protectedPage = document.getElementById("protected-page");
const passwordForm = document.getElementById("password-form");
const passwordPage = document.querySelector(".password-page")
const form = document.getElementById('password-form');
const passWordInputation = document.getElementById('password')
form.addEventListener('submit', function(e) {
  e.preventDefault()
  let passWordInputationy = passWordInputation.value
  let passwordy = "banane"
  
  if(passWordInputationy === passwordy) {
    protectedPage.style.display = "block"
    passwordForm.style.display = "none"
    passwordPage.style.display = "none"
  } else {
    alert("Mauvais mot de passe, veuillez recommencer")
  }

})

// End of Password page //


// Beginning of circle
const circle = document.getElementById('circle')
const countdown = document.querySelector('.countdown')
const background = document.querySelector('.background-container')
const title = document.querySelector('.title')
const spanOne = document.querySelector('.span-one')
const nav = document.querySelector('.nav-toggle')
const image = document.querySelector('.image-container-two')
const secThree = document.querySelector('.section-3')
const secFive = document.querySelector('.text-container-por')

circle.addEventListener('click', function() {
    countdown.classList.toggle('show-countdown')
    background.classList.toggle('change')
    title.classList.toggle('modify')
    circle.classList.toggle('circle-two')
    spanOne.classList.toggle('modify-two')
    image.classList.toggle('off')
    secThree.classList.toggle('off')
    secFive.classList.toggle('chgn-color')
})

circle.addEventListener('click', function() {
  document.body.classList.toggle('stopit')
})


nav.addEventListener('click', function() {
    nav.classList.toggle('rotate')
})

circle.addEventListener('click', function() {
    this.style.display = "none"

    setTimeout(function() {
    circle.style.display = "inline-block"
      }, 450);
})
// End of Circle

//smooth redirect "parcours"//
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const offset = 20; // Adjust this value to your needs
  const top = section.offsetTop - offset;

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}
//End of smooth redirect "parcours"//

const navnToggle = document.querySelector('.nav-toggle')
const linked = document.querySelector('.links')

navnToggle.addEventListener('click', function() {
  linked.classList.toggle('appear')
})



// Parallax title on scroll
document.addEventListener('scroll', function() {   
    let scrollPosition = window.pageYOffset
    let background = document.querySelector('.background-container')
    let title = document.querySelector('.title')
    let stopPosition = 200; // Replace 500 with your desired stopping position

    // Calculate the adjusted scroll position
    let adjustedScrollPosition = scrollPosition;

    // Check if the scroll position is greater than the stop position
    if (scrollPosition > stopPosition) {
        adjustedScrollPosition = stopPosition; // Set the adjusted position to the stop position
    }

    // Apply the adjusted scroll position to the transform property
    background.style.transform = 'translateY(' + (adjustedScrollPosition * 0.1) + 'px)';
    title.style.transform = 'translateY(' + (adjustedScrollPosition * 0.2) + 'px)';
});
//End of parallax title








//Countdown

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

// End of countdown

//Reveal element
  window.addEventListener("scroll", reveal)
    function reveal() {
      var reveals = document.querySelectorAll('.reveal')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }


  window.addEventListener("scroll", show)
    function show() {
      var reveals = document.querySelectorAll('.show')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = -50
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  //text slider//
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  //end of text slider// 




  window.addEventListener("scroll", showcase)
    function showcase() {
      var reveals = document.querySelectorAll('.showcase')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = -200
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener("scroll", showcasetwo)
    function showcasetwo() {
      var reveals = document.querySelectorAll('.showcasetwo')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = -200
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }


  window.addEventListener("scroll", showcasethree)
    function showcasethree() {
      var reveals = document.querySelectorAll('.showcasethree')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }
  
// End of Reveal element  

//section three alert//

function showAlert() {
  alert("¯|_( ͡ಥ ͜ʖ ͡ಥ)_/¯ Oops, on dirait bien que cette section est en construction... Allez plutôt voir le parcours UTHC 125 !")
}

//end of section three alert//
 


const grid = document.querySelector(".grid")
const gridContent = document.querySelector(".grid-header")
const voirPlus = document.querySelector(".voir-plus")

grid.addEventListener("click", function() {
  grid.classList.toggle("testing")
  gridContent.classList.toggle("testing-content")
  voirPlus.classList.toggle("show-voir")
})

const gridTwo = document.querySelector(".grid-2")
const gridContentTwo = document.querySelector(".grid-header-2")
const voirPlusTwo = document.querySelector(".voir-plus-two")

gridTwo.addEventListener("click", function() {
  gridTwo.classList.toggle("testing")
  gridContentTwo.classList.toggle("testing-content")
  voirPlusTwo.classList.toggle("show-voir-two")
})

const gridThree = document.querySelector(".grid-3")
const gridContentThree = document.querySelector(".grid-header-3")
const voirPlusThree = document.querySelector(".voir-plus-three")

gridThree.addEventListener("click", function() {
  gridThree.classList.toggle("testing")
  gridContentThree.classList.toggle("testing-content")
  voirPlusThree.classList.toggle("show-voir-three")
})

//section four mobile slider carousel //
const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})
//end of sectoin four mobile slider carousel //




//section five animation//

window.addEventListener("scroll", animFive)
function animFive() {
  var reveals = document.querySelectorAll('.animFive')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = -50
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
}
//end of section five animation//

window.addEventListener("scroll", animSix)
function animSix() {
  var reveals = document.querySelectorAll('.animSix')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = -50
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
}

window.addEventListener("scroll", animSeven)
function animSeven() {
  var reveals = document.querySelectorAll('.animSeven')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = -200
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
}

window.addEventListener("scroll", animHeight)
function animHeight() {
  var reveals = document.querySelectorAll('.animHeight')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 0
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
}

window.addEventListener("scroll", animNine)
function animNine() {
  var reveals = document.querySelectorAll('.animNine')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 200
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
}