// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox functionality for gallery images
document.querySelectorAll('.art img').forEach(item => {
  item.addEventListener('click', function() {
    const imgSrc = this.src;
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
      <div id="lightbox-overlay"></div>
      <img src="${imgSrc}" id="lightbox-image" />
      <span id="lightbox-close">&times;</span>
    `;
    document.body.appendChild(lightbox);

    // Close lightbox
    document.getElementById('lightbox-close').addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
  });
});

