const menuBtn = document.querySelector('.menu-btn')
      menu = document.querySelector('nav ul')
      exitBtn = document.querySelector('.exit-btn');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(70%)';
})

exitBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
})