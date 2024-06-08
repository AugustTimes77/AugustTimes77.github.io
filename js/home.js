// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element
    const button = document.getElementById('changeTextButton');
    
    // Add event listener to the button
    button.addEventListener('click', function() {
      // Change the button text
      button.textContent = 'Text Changed';
    });
  });
  