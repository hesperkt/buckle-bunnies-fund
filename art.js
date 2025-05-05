document.addEventListener("DOMContentLoaded", () => {
    const zineLinks = document.querySelectorAll('.zine-link');
  
    zineLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        alert(`You are about to open: ${e.target.innerText}`);
      });
    });
  });