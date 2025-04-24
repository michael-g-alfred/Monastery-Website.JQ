// Data containing a set of albums (each album has a title, subtitle, and images)
const albumsData = [
  {
    title: "عنوان الألبوم ١",
    subtitle: "عنوان الألبوم الفرعى ١",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٢",
    subtitle: "عنوان الألبوم الفرعى ٢",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٣",
    subtitle: "عنوان الألبوم الفرعى ٣",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٤",
    subtitle: "عنوان الألبوم الفرعى ٤",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٥",
    subtitle: "عنوان الألبوم الفرعى ٥",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
];

// Z-Index and Rotation Degrees for images
const imageZIndexes = [304, 303, 302, 301, 300];
const imageDegrees = [`0deg`, `-5deg`, `-10deg`, `-15deg`, `-20deg`];

$(document).ready(function () {
  function createAlbumCard(albumData) {
    const $albumCardContainer = $("#content05");

    const $albumCard = $("<div>").addClass("albumCard");
    const $imageGallery = $("<div>").addClass("imageGallery");

    albumData.images.forEach((src) => {
      const $img = $("<img>").attr("src", src).attr("alt", "");
      const $imageGalleryItem = $("<div>")
        .addClass("imageGallery_Item")
        .append($img);
      $imageGallery.append($imageGalleryItem);
    });

    $albumCard.append($imageGallery);

    const $albumDetails = $("<div>").addClass("albumDetails");
    const $albumTitle = $("<h2>").addClass("albumTitle").text(albumData.title);
    const $albumSubtitle = $("<p>")
      .addClass("albumSubtitle")
      .text(albumData.subtitle);

    $albumDetails.append($albumTitle).append($albumSubtitle);
    $albumCard.append($albumDetails);
    $albumCardContainer.append($albumCard);
  }

  function createAllAlbumCards(albumsData) {
    albumsData.forEach((album) => {
      createAlbumCard(album);
    });
  }

  createAllAlbumCards(albumsData);

  let $imageGalleryItems = $(".imageGallery_Item");

  (function imageGallery_ItemInitialState() {
    $imageGalleryItems.each(function (index) {
      $(this).css({
        zIndex: imageZIndexes[index % imageZIndexes.length],
        transform: `rotate(${imageDegrees[index % imageDegrees.length]})`,
        transition: "transform 1s ease",
      });
    });
  })();

  function cycleZIndex() {
    imageZIndexes.unshift(imageZIndexes.pop());
    imageDegrees.unshift(imageDegrees.pop());

    $imageGalleryItems.each(function (index) {
      $(this).css({
        zIndex: imageZIndexes[index % imageZIndexes.length],
        transform: `rotate(${imageDegrees[index % imageDegrees.length]})`,
        transition: "transform 1s ease",
      });
    });
  }

  setInterval(cycleZIndex, 2000);
});
