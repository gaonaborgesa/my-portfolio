// Shared Footer Component
function loadFooter() {
  const footerHTML = `
    <footer id="contact">
        <h3>Let's Connect!</h3>
        <p>I'm actively seeking full-time software development and product design opportunities post-graduation in May 2026.</p>

        <div class="rounded-social-buttons">
            <a class="social-button email" href="mailto:gaonaborgesa@berea.edu" target="_blank" rel="noopener noreferrer" title="Email">
                <i class="bi bi-envelope-fill" title="Email"></i>
            </a>
            <a class="social-button linkedin" href="https://linkedin.com/in/america-gaona-borges" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i class="bi bi-linkedin" title="LinkedIn"></i>
            </a>
            <a class="social-button" href="https://github.com/gaonaborgesa" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i class="bi bi-github" title="GitHub"></i>
            </a>
            <a class="social-button" href="America.GaonaBorges_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                <i class="bi bi-file-earmark-text-fill" title="Resume"></i>
            </a>
        </div>

        <p>© 2025 America Gaona Borges | Built with care 💙</p>
    </footer>
  `;
  
  document.getElementById('footer-placeholder').innerHTML = footerHTML;
}


// Close navbar after clicking a link on mobile
document.addEventListener('DOMContentLoaded', function() {
  // Load shared footer
  loadFooter();
    
  // Navbar mobile collapse functionality
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
  
  // Back to Top Button functionality
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    // Show button when scrolled down
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    // Scroll to top smoothly when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});