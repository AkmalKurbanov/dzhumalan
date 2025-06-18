$(document).ready(function () {
  $('.select-js').each(function () {
    const $select = $(this);
    const $dropdown = $select.find('.select__dropdown');
    const $selectedWrap = $select.find('.select__selected-wrap');
    const $input = $select.find('.select__input input'); // ← исправлено
    const $selected = $select.find('.select__selected');
    const $iconUse = $select.find('.icon use');

    // Открытие/закрытие селекта
    $selectedWrap.on('click', function (e) {
      e.stopPropagation();

      // Закрыть все другие селекты
      $('.select-js').not($select).each(function () {
        const $other = $(this);
        const $otherInput = $other.find('.select__input input');
        const $otherIcon = $other.find('.icon use');

        $other.removeClass('select--active');

        if (!$otherInput.val()) {
          $other.removeClass('select--checked');
          $otherIcon.attr('xlink:href', 'sprite.svg#angle-down');
        } else {
          $otherIcon.attr('xlink:href', 'sprite.svg#check');
        }
      });

      // Переключение текущего селекта
      const isActive = $select.hasClass('select--active');
      $select.toggleClass('select--active', !isActive);

      if (!isActive) {
        $select.removeClass('select--checked');
        $iconUse.attr('xlink:href', 'sprite.svg#angle-up');
      } else {
        const icon = $input.val() ? 'sprite.svg#check' : 'sprite.svg#angle-down';
        $iconUse.attr('xlink:href', icon);
        if ($input.val()) {
          $select.addClass('select--checked');
        }
      }
    });

    // Выбор пункта
    $dropdown.find('.select__item').on('click', function () {
      const value = $(this).data('value');
      const text = $(this).text();

      $input.val(value);                       // <- значение в input
      $selected.text(text);                    // <- отображаемый текст
      $select.removeClass('select--active').addClass('select--checked');
      $iconUse.attr('xlink:href', 'sprite.svg#check');
    });
  });

  // Клик вне — закрыть всё
  $(document).on('click', function () {
    $('.select-js').each(function () {
      const $select = $(this);
      const $input = $select.find('.select__input input');
      const $iconUse = $select.find('.icon use');

      $select.removeClass('select--active');

      if ($input.val()) {
        $select.addClass('select--checked');
        $iconUse.attr('xlink:href', 'sprite.svg#check');
      } else {
        $select.removeClass('select--checked');
        $iconUse.attr('xlink:href', 'sprite.svg#angle-down');
      }
    });
  });
});
