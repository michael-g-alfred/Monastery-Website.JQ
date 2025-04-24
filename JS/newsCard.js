var $content02 = $("#content02");

var newsCardData = [
  {
    title: "إفتتاح مكتبة المحبة",
    description:
      "إفتتاح مكتبة المحبة فى اليوم ٢٠ من مارس ٢٠٢٥ على يد صاحبة النيافة الحبر الجليل الإنبا تادرس.",
    image: "Assets/Images/Alexandria-Egypt.jpg",
  },
  { title: "العنوان ٢", description: "الوصف ٢", image: "images/img2.jpg" },
  { title: "العنوان ٣", description: "الوصف ٣", image: "images/img3.jpg" },
  { title: "العنوان ٤", description: "الوصف ٤", image: "images/img4.jpg" },
  { title: "العنوان ٥", description: "الوصف ٥", image: "images/img5.jpg" },
];

for (let i = 0; i < newsCardData.length; i++) {
  var $newsCard = $("<div>")
    .addClass("newsCard")
    .addClass(`newsCard-${i + 1}`).html(`
      <img src="${newsCardData[i].image}" alt="Image ${i + 1}">
      <div>
        <h2>${newsCardData[i].title}</h2>
        <h3>${newsCardData[i].description}</h3>
      </div>
    `);

  $content02.append($newsCard);
}
