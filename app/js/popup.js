// ИНИЦИАЛИЗАЦИЯ ТЕМЫ ПРИ ЗАГРУЗКЕ
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});


// ОСНОВНОЙ JQUERY-КОД
$(document).ready(function () {
  // === ОТКРЫТИЕ ПОПАПА ===
  $('.popup-js').on('click', function (e) {
    e.preventDefault();
    const target = $(this).data('popup');
    $('.popup').removeClass('active');
    $('.popup[data-popup="' + target + '"]').addClass('active');
  });

  // === ЗАКРЫТИЕ ПО КРЕСТИКУ ===
  $(document).on('click', '.popup-close-js', function () {
    $('.popup').removeClass('active');
  });

  // === ЗАКРЫТИЕ ПО КЛИКУ ВНЕ КОНТЕНТА ===
  $(document).on('click', function (e) {
    const $target = $(e.target);
    if ($target.hasClass('popup')) {
      $target.removeClass('active');
    }
  });

  // === ЗАКРЫТИЕ ПО ESC ===
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.popup').removeClass('active');
    }
  });

  // === ВЫБОР ЯЗЫКА ИЛИ ТЕМЫ ===
  $(document).on('click', '.item-popup-js', function () {
    const $label = $(this);
    const value = $label.data('lang') || $label.data('theme');
    const $popup = $label.closest('.popup');
    const $form = $label.closest('form');

    // Сохраняем выбранное значение
    $form.find('input[type="hidden"]').val(value);

    // Сброс всех чеков
    $popup.find('.popup__window-item-right').removeClass('active');

    // Добавляем чек текущему
    $label.find('.popup__window-item-right').addClass('active');
  });

  // === СОХРАНЕНИЕ ВЫБОРА ===
  $(document).on('click', '.button-popup-js', function (e) {
    e.preventDefault();

    const $form = $(this).closest('form');
    const selectedValue = $form.find('input[type="hidden"]').val();
    const $popup = $(this).closest('.popup');
    const popupType = $popup.data('popup'); // "language" или "theme"

    // Обновляем текст в меню
    $('.menu__item.popup-js[data-popup="' + popupType + '"] .menu__item-selected')
      .text(selectedValue);

    // Смена темы
    if (popupType === 'theme') {
      if (selectedValue === 'Темная') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }

    // Закрытие окна
    $popup.removeClass('active');
  });
});
