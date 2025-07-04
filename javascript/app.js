// Side Menu Logic
function openMenu() {
  document.getElementById("sideMenu").style.right = "0";
  document.getElementById("backdrop").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.right = "-250px";
  document.getElementById("backdrop").style.display = "none";
}

// Thumbnail Image Gallery Logic
(function () {
  const thumbnails = document.querySelectorAll("#thumbnailGrid img");
  const mainImage = document.getElementById("mainImage");
  const prevBtn = document.querySelector(".carousel-nav.prev");
  const nextBtn = document.querySelector(".carousel-nav.next");

  let thumbIndex = 0;

  function updateMainImage(index) {
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
    mainImage.src = thumbnails[index].src;
    thumbIndex = index;
  }

  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener("click", () => updateMainImage(i));
  });

  prevBtn?.addEventListener("click", () => {
    const newIndex = (thumbIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(newIndex);
  });

  nextBtn?.addEventListener("click", () => {
    const newIndex = (thumbIndex + 1) % thumbnails.length;
    updateMainImage(newIndex);
  });

  // Initialize first image if thumbnails exist
  if (thumbnails.length > 0) updateMainImage(0);
})();

// Accordion Logic
(function () {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-icon").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        button.querySelector(".accordion-icon").textContent = "−";
      }
    });
  });

  document.querySelectorAll(".section-accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".section-accordion-item").forEach((i) => {
        i.classList.remove("active");
        i.querySelector("span:last-child").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        header.querySelector("span:last-child").textContent = "−";
      }
    });
  });
})();

// Image Carousel Logic
(function () {
  const images = document.querySelectorAll(".carousel-image");
  const carouselImages = document.getElementById("carousel-images");
  const dotsContainer = document.getElementById("carousel-dots");
  let carouselIndex = 0;

  function updateCarousel() {
    if (images.length === 0) return;
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${carouselIndex * width}px)`;
    dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === carouselIndex);
    });
  }

  function goToSlide(index) {
    carouselIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    goToSlide((carouselIndex + 1) % images.length);
  }

  function prevSlide() {
    goToSlide((carouselIndex - 1 + images.length) % images.length);
  }

  // Create dots
  images.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  updateCarousel();
  window.addEventListener("resize", updateCarousel);

  // Optional: auto-play
  // setInterval(nextSlide, 5000);
})();

const btn_1 = document.getElementById("topScroll");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn_1.classList.add("show");
  } else {
    btn_1.classList.remove("show");
  }
});

btn_1.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
