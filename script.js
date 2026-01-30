// Close navbar after clicking a link on mobile
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Check if navbar is expanded (on mobile)
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
});