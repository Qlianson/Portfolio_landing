window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.hamburger'),
          menuBlock = document.querySelector('.menu'),
          menuClose = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');

    menuButton.addEventListener('click', () => {
        menuBlock.classList.add('active');
    });

    closeModal(menuClose);
    closeModal(overlay);

    function closeModal(button) {
        button.addEventListener('click', () => {
            menuBlock.classList.remove('active');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && menuBlock.classList.contains('active')) {
            menuBlock.classList.remove('active');
        }
    });

    //persents

    const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

});