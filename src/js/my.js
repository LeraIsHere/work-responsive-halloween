const 
    navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    // remove menu mobile 
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

// change background header

const scrollHeader = () =>{

    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
           : header.classList.remove('bg-header')
  }
  window.addEventListener('scroll', scrollHeader)

  // scroll section active link
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollY = window.pageYOffset
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  // show scroll up
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  // scroll reveal animation

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animations repeat
  })

  sr.reveal('.home__data, .footer__content, .footer__logo, .footer__description')
  sr.reveal('.home__tree-1', {origin: 'left', delay: 800})
  sr.reveal('.home__tree-2', {origin: 'right', delay: 800})
  sr.reveal('.home__img', {delay: 800})
  sr.reveal('.category__card, .items__card', {interval: 100})
  sr.reveal('.about__img, .about__data, .footer__tree-2', {origin: 'left'})
  sr.reveal('.party__images, .party__data, footer__tree-1', {origin: 'right'})
