document.addEventListener('DOMContentLoaded', () => {
    // Select the element with ID 'content-btn'
    const contentButton = document.getElementById('content-btn');
  
    // Check if the element exists before adding the event listener
    if (contentButton) {
      contentButton.addEventListener('click', () => {
        // Scroll to the bottom of the page when the button is clicked
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth', // Add smooth scrolling
        });
      });
    } else {
      console.warn("No element with ID 'content-btn' found on this page.");
    }
  });