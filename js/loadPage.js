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

  // Function to load home.html when the page loads
  function loadHomeContent() {
    loadContent('content/home.html');
  }

  // Load home.html when the page loads
  loadHomeContent();

  // Add event listeners to header links
  document.getElementById('header').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const contentUrl = event.target.getAttribute('data-content-url');
      if (contentUrl) {
        loadContent(`content/${contentUrl}`); // Assuming content files are in the "content" folder
      }
    }
  });
});

