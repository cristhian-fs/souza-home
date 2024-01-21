

document.addEventListener('DOMContentLoaded', () =>{

  // FUNCTION TO OPEN THE MENU
  const hamburgerButton = document.querySelector('.hamburger')
  const headerOptions = document.querySelector('.headerOptions')
  const closeMenuMobile = document.querySelector('.closeMenuMobile')

  if(headerOptions){
    const mobileLinks = headerOptions.querySelectorAll('a')

    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        if(headerOptions.classList.contains('is-active')){
          hamburgerButton.classList.remove('is-active')
          headerOptions.classList.remove('is-active')
        }
      })
    })
  }

  hamburgerButton.addEventListener('click', (e) =>{
    e.preventDefault()
    hamburgerButton.classList.toggle('is-active')
    headerOptions.classList.toggle('is-active')
    gsap.to(headerOptionsButton, {
      y: 0,
      stagger: 0.4,
      duration: 1,
      ease: 'power3.out'
    })
  })

  closeMenuMobile.addEventListener('click', (e) =>{
    e.preventDefault()
    if(headerOptions.classList.contains('is-active')){
      hamburgerButton.classList.remove('is-active')
      headerOptions.classList.remove('is-active')
    }
  })

  // FUNCTION TO OPEN TOGGLE OPTIONS
  const toggleButtons = document.querySelectorAll('.toggleButton');
  const toggleContents = document.querySelectorAll('.toggleContent');
  const extraContents = document.querySelectorAll('.extraContent');
  
  // Inicializando alturas máximas para 0
  extraContents.forEach((item) => {
    item.style.maxHeight = 0;
  });

  function handleToggleContent(index) {
    toggleContents.forEach((contentItem, contentIndex) => {
      contentItem.classList.toggle("active", contentIndex === index);
    });

    extraContents.forEach((extraContent, extraContentIndex) => {
      if (extraContentIndex === index) {
        extraContent.style.maxHeight = extraContent.scrollHeight + 'px';
        extraContent.classList.add('mt-4')
      } else {
        extraContent.style.maxHeight = 0;
        extraContent.classList.remove('mt-4')
      }
    });
  }


  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      handleToggleContent(index);
    });
  });

  // FUNCTION TO SHOW A LOADING SCREEN

  const loadingScreen = document.getElementById('loader');
  const loadingBar = document.querySelector('.loadingBar');
  const numberLoading = document.getElementById('numberLoading');

  const { gsap } = window;
  gsap.registerPlugin(window.ScrollTrigger);

  if(loadingScreen){
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: loadingScreen,
        start: 'top center', // Inicia a animação quando o topo do loadingScreen atinge o centro da janela
      },
      onComplete: hideLoadingScreen,
    });
    timeline.fromTo(loadingBar,{
      scaleX: 0,
    },
      { duration: 3, scaleX: 1, ease: 'power2.inOut' }
      );
      let currentValue = 0;
  
    // // Animação usando GSAP e ScrollTrigger
      timeline.to({}, {
        duration: 3,
        onUpdate: function () {
          currentValue = Math.floor(gsap.getProperty(numberLoading, 'innerHTML')) + 1;
  
          // Limita o valor entre 0 e 100
          currentValue = Math.min(Math.max(currentValue, 0), 100);
  
          numberLoading.innerHTML = currentValue;
          },
          ease: 'power2.inOut',
      }, 0);
  
    function hideLoadingScreen() {
      // Quando a animação estiver completa, esconda a tela de loading
      loadingScreen.classList.add('loaded')
  
      gsap.from(heroWords.words, {
        y: 40,
        opacity: 0,
        stagger: .3,
        duration: 0.5,
        ease: 'none'
      })
    }
  }
  

  // ENTERING HERO TEXT ANIMATION
  const heroWords = new SplitType('.revealHeroText')

  if(heroWords){
    gsap.from(heroWords.words, {
      y: 40,
      opacity: 0,
      stagger: .3,
      duration: 0.5,
      ease: 'none'
    })
  }
  


  const headerOptionsButton = gsap.utils.toArray('.headerOptionsButton')

  if(headerOptionsButton){
    gsap.set(headerOptionsButton, {
      y: -100,
    })
  }

  

  // ENTERING SECOND TEXT TIMELINE
  let mm = gsap.matchMedia()

  const secondHeaders = document.querySelectorAll('.secondHeader')

 

  const heroVideo = document.querySelector('.heroVideo')
  const secondVideo = document.querySelector('.secondVideo')
  const section02 = document.querySelector('.section02')
  const expertName = new SplitType('.aboutName')

  if(secondHeaders){
    secondHeaders.forEach((char, i) =>{
      const text = new SplitType(char, {types: 'chars'})
      gsap.from(text.chars, {
        opacity: 0.2,
        stagger: 0.03,
        delay: 0.25,
        duration: 0.3,
        scrollTrigger:{
          trigger: section02,
          start: 'top 60%',
          end: 'center 40%',
          scrub: 1,
        }
      })
    })
  
  }
  
  // ONLY MOBILE ANIMATIONS
  mm.add('(max-width: 767px', () =>{

    if(secondVideo){
      gsap.set(secondVideo, {y: -200})
      gsap.to(heroVideo, {
        opacity: 0,
        duration: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section02,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      })
      gsap.to(secondVideo, {
        y: 250,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section02,
          start: 'top 60%',
          end: 'center 40%',
          scrub: 1,
        }
      })
    }
    
    
    if(expertName){
      gsap.from(expertName.chars, {
        y: 40,
        opacity: 0,
        skewX: 30,
        stagger: 0.03,
        scrollTrigger: {
          trigger: '.section06',
          start: 'top 80%',
          end: 'top 25%',
          scrub:1,
        }
      })
    }
    
    
  })

  // // ONLY DESKTOP ANIMATIONS
  mm.add('(min-width: 768px', () =>{

    if(secondVideo){
      gsap.set(secondVideo, {y: -200, opacity: 0})
      gsap.to(heroVideo, {
        opacity: 0,
        duration: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section02,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      })
      gsap.to(secondVideo, {
        y: 250,
        opacity: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section02,
          start: 'top 60%',
          end: 'center 40%',
          scrub: 1,
        }
      })
    }
    
    if(expertName){
      gsap.from(expertName.chars, {
        y: 40,
        opacity: 0,
        skewX: 30,
        stagger: 0.03,
        scrollTrigger: {
          trigger: '.section06',
          start: 'top 60%',
          end: 'top 25%',
          scrub:1,
        }
      })
    }
    
    const heroButton = document.querySelector('.heroButton');
    const heroSection = document.querySelector('.heroSection');
    const heroRect = heroSection.getBoundingClientRect();

    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    gsap.set(heroButton, {
      "--mouse-y": `70%`,
      "--mouse-x": `55%`,
    })

    heroSection.addEventListener('mousemove', (e) => {
      const x = e.clientX - heroRect.left;
      const y = e.clientY - heroRect.top;

      const mouseXDelayed = (windowWidth * -0.15) + x * 0.3;
      const mouseYDelayed = (windowHeight * -0.15) + y * 0.3;

      gsap.to(heroButton, {
        "--mouse-x": `calc(55% + ${mouseXDelayed}px)`,
        "--mouse-y": `calc(70% + ${mouseYDelayed}px)`,
        duration: 0.5, // Ajuste a duração conforme necessário
        ease: "power2.out", // Escolha uma função de easing que se ajuste à sensação desejada
      });
    });

    const section06 = document.querySelector('.section06')
    const letsTalkOverlay = document.querySelector('.letsTalkOverlay')
    if(section06){
      const section06Rect = section06.getBoundingClientRect()
      return section06Rect
    } 
   

    if(section06){
      section06.addEventListener('mousemove', (e) =>{
        const x = e.clientX
        const y = e.clientY
  
        gsap.to(letsTalkOverlay,{
          "--mouse-x": `${x}px`,
          "--mouse-y": `${y}px`,
          duration: 0.2,
          ease: 'power2.out'
        })
      })
  
      section06.addEventListener('mouseover', () =>{
        if(letsTalkOverlay){
          gsap.to(letsTalkOverlay,{
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          })
        }
        
      })
      section06.addEventListener('mouseleave', () =>{
        if(letsTalkOverlay){
          gsap.to(letsTalkOverlay,{
            scale: 0,
            duration: 0.2,
            ease: 'power2.out'
          })
        }
        
      })
    }
    
  })

  const section03 = document.querySelector('.section03')
  const contentAsideBars = gsap.utils.toArray('.contentAsideBar')
  const contentToggleButtons = gsap.utils.toArray('.toggleButton')

  if (contentAsideBars){
    gsap.fromTo(contentAsideBars, {scaleX: 0}, {
      scaleX: 1,
      duration: 0.3,
      ease: 'none',
      stagger: 0.03,
      scrollTrigger: {
        trigger: section03,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none'
      }
    })
  }
  
  if(contentToggleButtons){
    gsap.fromTo(contentToggleButtons,{
      y: 250,
    }, {
      y: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section03,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none none'
      }
    })
  }
  

  // SCROLL TESTIMONIAL ANIMATION
  if(document.querySelector('.section05')){
    gsap.from(".section05 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '.section05',
        start: 'top 80%',
        end: 'top 25%',
        scrub: 1,
        //markers: true,
      }
    });
  }
  

  // SCROLL ABOUT ANIMATION
  if(document.querySelector('.section06')){
    gsap.from(".section06 > img",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '.section05',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        //markers: true,
      }
    });
  }
  

  ScrollTrigger.addEventListener("scrollStart", () => {
    ScrollTrigger.refresh();
  });

  // PRELOAD IMAGES
  const blurredImageDiv = document.querySelectorAll(".blurred-img")
  blurredImageDiv.forEach(div => {
    const img = div.querySelector("img")
    function loaded() {
      div.classList.add("loaded")
    }
  
    if (img.complete) {
      loaded()
    } else {
      img.addEventListener("load", loaded)
    }
  })  

})