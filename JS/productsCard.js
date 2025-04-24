var $content04 = $("#content04");

// Custom productsCardData for each newsCard, including image source
var productsCardData = [
  {
    title: "برطمان مخلل ١كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "150 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
];

for (let i = 0; i < productsCardData.length; i++) {
  var $productsCard = $("<div>").addClass("productsCardContainer").html(`
      <div class="productsCardLeft">
        <img src="${productsCardData[i].image}" alt="Image ${i + 1}">
      </div>
      <div class="productsCardRight">
        <div class="product-name">${productsCardData[i].title}</div>
        <div class="product-price">${productsCardData[i].price}</div>
      </div>
    `);

  $content04.append($productsCard);
}
