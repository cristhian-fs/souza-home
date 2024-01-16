document.addEventListener('DOMContentLoaded', () =>{
  // FUNCTION TO OPEN THE MENU
  const hamburgerButton = document.querySelector('.hamburger')
  const headerOptions = document.querySelector('.headerOptions')
  const closeMenuMobile = document.querySelector('.closeMenuMobile')

  hamburgerButton.addEventListener('click', (e) =>{
    e.preventDefault()
    hamburgerButton.classList.toggle('is-active')
    headerOptions.classList.toggle('is-active')
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

  handleToggleContent(0)

  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      handleToggleContent(index);
    });
  });
})