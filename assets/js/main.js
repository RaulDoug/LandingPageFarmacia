// HERO FUNCTIONS
window.initMenu = function () {
  const openBtn = document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('menu-close-btn');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay')

  const menuLinks = document.querySelectorAll('.menu-nav-item');

  const toggleMenu = () => {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  const closeMenu = () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  }

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ABOUT | ReadMore
window.readMore = function () {
  function viewMore(btn, content, heightStart) {
    content.classList.toggle('active');

    if(content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      btn.textContent = 'Ver menos';
    } else {
      content.style.maxHeight = heightStart;
      btn.textContent = 'Ver mais';
    }
  }

  // About
  const aboutBtn = document.querySelector('.about-desc-more');
  const aboutContent = document.querySelector('.about-desc');

  const aboutHeight = getComputedStyle(aboutContent).maxHeight;

  aboutBtn.addEventListener('click', () => {
    viewMore(aboutBtn, aboutContent, aboutHeight);
  });
}