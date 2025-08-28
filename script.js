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