// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful');
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// Image Preloading and Optimization
document.addEventListener('DOMContentLoaded', function() {
  // Preload critical images
  const criticalImages = [
    './images/Vastrack Logo Portrait  PNG.png'
  ];
  
  criticalImages.forEach(function(src) {
    const img = new Image();
    img.src = src;
  });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Document download functionality
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadBtn');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      // Create a link element to download the PDF file
      const link = document.createElement('a');
      link.href = './MOBLOGIC LTD (1).pdf'; // Path to your PDF file
      link.download = 'MOBLOGIC_LTD_Document.pdf'; // Name for the downloaded file
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      alert('PDF download started!');
    });
  }
});