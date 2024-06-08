document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");

    if (file) {
      fetch(`includes/partials/${file}`)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute("data-include");
        })
        .catch(error => console.error("Error loading HTML file:", error));
    }
  });
}

