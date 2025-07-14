document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。 */
  const menuBtn = document.querySelector('.header_menuBtn');
  const menuItems = document.querySelector('.header_menuItems')
  const menuMask = document.querySelector('.header_mask');

  menuBtn.addEventListener(('click'), function() {
    menuBtn.classList.toggle('active')
    menuItems.classList.toggle('active');
    menuMask.classList.toggle('active');
  });
});
