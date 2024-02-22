
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  const handleFadeIn = () => {
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile devices
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((element) => {
      if (!isMobile) {
        if (isElementInViewport(element)) {
          element.classList.add('active');
        }
      } else {
        element.classList.add('active'); // Show elements instantly on mobile
      }
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    handleFadeIn();
  });
  
  window.addEventListener('scroll', () => {
    handleFadeIn();
  });

  /*aktiv bjælke*/
  let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  let text = document.getElementsByClassName("text");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < text.length; i++) {
    text[i].style.display = "none";  
  }

  slides[slideIndex - 1].style.display = "block";  
  text[slideIndex - 1].style.display = "block";  

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/**Galleri */
document.addEventListener('DOMContentLoaded', function() {
  const galleri = document.querySelector('.galleri');
  const bokse = galleri.querySelectorAll('.boks');
  const pileVenstre = galleri.querySelector('.venstre');
  const pileHojre = galleri.querySelector('.hojre');
  let currentIndex = 0;

  function visBokse(startIndex) {
    bokse.forEach(function(boks, index) {
      if (index >= startIndex && index < startIndex + 4) {
        boks.classList.add('synlig');
      } else {
        boks.classList.remove('synlig');
      }
    });
  }

  // Pileklikhåndterere
  pileVenstre.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex -= 1;
      visBokse(currentIndex);
    }
  });

  pileHojre.addEventListener('click', function() {
    if (currentIndex < bokse.length - 4) {
      currentIndex += 1;
      visBokse(currentIndex);
    }
  });

  // Vis de første 4 bokse
  visBokse(currentIndex);
});




