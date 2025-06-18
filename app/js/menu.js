$(document).ready(function () {
  // Открыть меню
  $('.menu-js').on('click', function (e) {
    $(this).parent().addClass('active');
    e.stopPropagation();
    $('.menu').addClass('active');
  });
});


$(document).ready(function () {
  $('.mobile-nav li a').on('click', function (e) {
    e.preventDefault(); // если нужно предотвратить переход по ссылке

    // Удаляем .active у всех <li>
    $('.mobile-nav li').removeClass('active');

    // Добавляем .active к тому <li>, по которому кликнули
    $(this).closest('li').addClass('active');
  });
});
