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
      // Get the document content
      const documentContent = document.querySelector('.document-content');
      const documentTitle = document.querySelector('.document-header h1').textContent;
      
      // Create a downloadable HTML file
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${documentTitle}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            color: #008080;
            border-bottom: 2px solid #008080;
            padding-bottom: 10px;
        }
        h2 {
            color: #008080;
            margin-top: 30px;
        }
        h3 {
            color: #333;
            margin-top: 25px;
        }
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
    </style>
</head>
<body>
    <h1>${documentTitle}</h1>
    ${documentContent.innerHTML}
</body>
</html>`;
      
      // Create and trigger download
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MOBLOGIC_LTD_Document.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      // Show success message
      alert('Document download started!');
    });
  }
});