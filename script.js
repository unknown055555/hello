
document.querySelector(".first-location .btn2").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "https://maps.app.goo.gl/k5nxyeJdHXNJYAk68";
});
// Add a click event listener to the button
document.querySelector("#contact-btn").addEventListener('click', () => {
  // Scroll to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Smooth scrolling animation
  });
});


// document.querySelector(".left-footer left-image-content img").addEventListener("click", function () {
//   // The URL to redirect to
//   window.location.href = "./index.html";
// });
document.querySelector(".left-footer .left-image-content img").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./index.html";
});
document.querySelector(".left-social-content #fb").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "https://www.facebook.com/BITSindriDhanbad/";
});

document.querySelector(".left-social-content #x").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "https://x.com/BITSindriDhn";
});

document.querySelector(".left-social-content #linkedin").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "https://www.linkedin.com/school/bit-sindri/";
});
document.querySelector("#homepage").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./index.html";
});
document.querySelector("#admission-page").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./admission.html";
});

document.querySelector(".about-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./about.html";
});  
document.querySelector("#aboutpage").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./about.html";
});
document.querySelector(".ug-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./ug.html";
});  
document.querySelector("#ug").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./ug.html";
});  
document.querySelector(".pg-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./pg.html";
});  
document.querySelector(".phd-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./phd.html";
}); 


//for scrolling animation througout the page
document.addEventListener("DOMContentLoaded", () => {


  const elements = document.querySelectorAll(".scroll-appear-x-lr, .scroll-appear-x-rl, .scroll-appear-y-dt");

  const handleScroll = () => {
      elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
              el.classList.add("visible");
          } else {
              el.classList.remove("visible");
          }
      });
  };

  // Trigger scroll once to check the elements in view on load
  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

//loading screen
document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {
    // by default loading screen is visible and content is hidden
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the main content
    document.querySelector(".container").style.display="block"
    document.querySelector(".container").scrollIntoView({ behavior: 'smooth' });
  }, 1000);

});



document.querySelector(".tnp-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./training-and-placement.html";
});  
document.querySelector(".facility-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./facilities.html";
});  
document.querySelector(".notice-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./notices.html";
});  
document.querySelector(".fee-page-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./fee-structure.html";
});  
document.querySelector(".a-r-redirect").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "https://www.antiragging.in/";
});  
document.querySelector("#pg").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./pg.html";
});  
document.querySelector("#phd").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./phd.html";
});  
document.querySelector("#sports-club").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./sports-club.html";
});  
document.querySelector("#cultural-club").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./cultural-society.html";
});  
document.querySelector("#technical-society").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./technical-society.html";
});  
document.querySelector(".recruit-logos .btn2").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./training-and-placement.html";
});  
document.querySelector("#academics").addEventListener('click', () => {
  // Scroll to the target section smoothly
  document.querySelector(".academic-programme").scrollIntoView({ behavior: 'smooth' });
});



document.querySelector(".right-msg-learn-more").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./director-message.html";
});  
document.querySelector(".about-institute .btn2").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./about.html";
});  








document.querySelector("#ewdwed").addEventListener("click", function () {
  // The URL to redirect to
  window.location.href = "./pg.html";
});  

