$(document).ready(function () {
  function showBtnCondition() {
    if ($(this).scrollTop() > 600) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);

  $('.top-btn').click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
});
