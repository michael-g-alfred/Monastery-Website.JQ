const data = [
  {
    img: "Assets/Images/Carousel/01.avif",
    text: "هذا هو النص الخاص بالشريحة الأولى",
  },
  {
    img: "Assets/Images/Carousel/02.avif",
    text: "هذا هو النص الخاص بالشريحة الثانية",
  },
  {
    img: "Assets/Images/Carousel/03.avif",
    text: "هذا هو النص الخاص بالشريحة الثالثة",
  },
  {
    img: "Assets/Images/Carousel/04.avif",
    text: "هذا هو النص الخاص بالشريحة الرابعة",
  },
  {
    img: "Assets/Images/Carousel/05.avif",
    text: "هذا هو النص الخاص بالشريحة الخامسة",
  },
];

let currentIndex = 0;

const $carouselCenter = $(".carouselItem.center");
const $carouselLeft = $(".carouselItem.left");
const $carouselRight = $(".carouselItem.right");
const $dotsContainer = $(".carouselDots");

// Create dots dynamically
$dotsContainer.empty();
data.forEach((_, index) => {
  const $dot = $("<div>").addClass("carouselDot");
  if (index === currentIndex) $dot.addClass("carouselActive");
  $dot.on("click", () => {
    currentIndex = index;
    updateCarousel();
  });
  $dotsContainer.append($dot);
});

// Update carousel
const updateCarousel = () => {
  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  $carouselCenter.html(`
    <img src="${data[currentIndex].img}" alt="center image" class="carouselImages">
    <h2 class="carouselTitle">${data[currentIndex].text}</h2>
  `);

  $carouselLeft.html(`
    <img src="${data[prevIndex].img}" alt="left image" class="carouselImages">
  `);

  $carouselRight.html(`
    <img src="${data[nextIndex].img}" alt="right image" class="carouselImages">
  `);

  $(".carouselDot").each(function (index) {
    $(this).toggleClass("carouselActive", index === currentIndex);
  });
};

// Auto-rotate
setInterval(() => {
  currentIndex = (currentIndex + 1) % data.length;
  updateCarousel();
}, 5000);

// Initial display
updateCarousel();
