document.addEventListener("DOMContentLoaded", function() {
    function loadContent(filePath) {
      fetch(filePath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(html => {
          document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
          console.error('Error loading the HTML file:', error);
        });
    }
  
    // Add event listeners to header links
    document.getElementById('header').addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const contentUrl = event.target.getAttribute('data-content-url');
        if (contentUrl) {``
          loadContent(contentUrl);
        }
      }
    });
  });
  