$(document).ready(function () {
  $(".nav-left").on("click", function () {
    if ($(this).hasClass("toggled")) {
      $(".nav-left button").empty().html(`
        <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M55.4167 32.0833H61.25M58.3333 29.1667V35M35.0001 8.75001C35.3851 8.75001 35.7672 8.75001 36.1463 8.75001C32.3994 12.2317 29.991 16.9162 29.3397 21.9894C28.6884 27.0626 29.8354 32.2036 32.5814 36.5188C35.3274 40.834 39.4987 44.0506 44.3702 45.6093C49.2417 47.1681 54.5054 46.9705 59.2463 45.0508C57.4226 49.439 54.442 53.2497 50.6223 56.0766C46.8026 58.9035 42.2872 60.6405 37.5577 61.1024C32.8282 61.5643 28.0621 60.7336 23.7677 58.6991C19.4733 56.6646 15.8117 53.5025 13.1735 49.5501C10.5353 45.5977 9.01943 41.0033 8.78766 36.257C8.55588 31.5107 9.61686 26.7905 11.8574 22.5998C14.098 18.4092 17.434 14.9054 21.5098 12.4622C25.5856 10.0189 30.2481 8.72783 35.0001 8.72668V8.75001ZM49.5833 11.6667C49.5833 13.2138 50.1979 14.6975 51.2919 15.7915C52.3858 16.8854 53.8696 17.5 55.4167 17.5C53.8696 17.5 52.3858 18.1146 51.2919 19.2085C50.1979 20.3025 49.5833 21.7862 49.5833 23.3333C49.5833 21.7862 48.9688 20.3025 47.8748 19.2085C46.7808 18.1146 45.2971 17.5 43.75 17.5C45.2971 17.5 46.7808 16.8854 47.8748 15.7915C48.9688 14.6975 49.5833 13.2138 49.5833 11.6667Z"
            stroke="#757575" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`);

      $("html").css({
        "--Primary-color-Rest": "",
        "--Primary-color-Rest-25": "",
        "--Primary-color-Rest-30": "",
        "--Primary-color-Selected": "",
        "--Primary-color-Pressed": "",
        "--Secondary-color-Rest": "",
        "--Secondary-color-Selected": "",
        "--Secondary-color-Selected-25": "",
        "--Secondary-color-Pressed": "",
        "background-image": "",
      });

      $(this).removeClass("toggled");
    } else {
      $(".nav-left button").empty().html(`
        <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.75 35H11.6667M35 8.75V11.6667M58.3333 35H61.25M35 58.3333V61.25M16.3333 16.3333L18.375 18.375M53.6667 16.3333L51.625 18.375M51.625 51.625L53.6667 53.6667M18.375 51.625L16.3333 53.6667M23.3333 35C23.3333 38.0942 24.5625 41.0617 26.7504 43.2496C28.9383 45.4375 31.9058 46.6667 35 46.6667C38.0942 46.6667 41.0617 45.4375 43.2496 43.2496C45.4375 41.0617 46.6667 38.0942 46.6667 35C46.6667 31.9058 45.4375 28.9383 43.2496 26.7504C41.0617 24.5625 38.0942 23.3333 35 23.3333C31.9058 23.3333 28.9383 24.5625 26.7504 26.7504C24.5625 28.9383 23.3333 31.9058 23.3333 35Z" stroke="#C9A227" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `);
      $("html").css({
        "--Primary-color-Rest": "#6d5310",
        "--Primary-color-Rest-25": "rgba(109, 83, 16, 25%)",
        "--Primary-color-Rest-30": "rgba(109, 83, 16, 30%)",
        "--Primary-color-Selected": "#a1782e",
        "--Primary-color-Pressed": "#4c3e0b",
        "--Secondary-color-Rest": "#616161",
        "--Secondary-color-Selected": "#888888",
        "--Secondary-color-Selected-25": "rgba(136, 136, 136, 25%)",
        "--Secondary-color-Pressed": "#4f4f4f",
        "background-image": 'url("../Assets/SVGs/backgroundd.svg")',
      });
      $(this).addClass("toggled");
    }
  });
});
