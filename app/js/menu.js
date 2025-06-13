$(document).ready(function () {
  // Открыть меню
  $('.menu-js').on('click', function (e) {
    e.stopPropagation();
    $('.menu').addClass('active');
  });

  // Предотвращаем скрытие при клике внутри .menu__bar
  $('.menu__bar').on('click', function (e) {
    e.stopPropagation();
  });

  // Клик вне .menu__bar — скрыть меню
  $(document).on('click', function () {
    $('.menu').removeClass('active');
  });
});
