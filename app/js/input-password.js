$(document).ready(function () {
  $('.toggle-password').on('click', function () {
    const $toggle = $(this);
    const inputId = $toggle.data('target');
    const $input = $(inputId);
    const $svgUse = $toggle.find('use');

    if ($input.attr('type') === 'password') {
      $input.attr('type', 'text');
      $svgUse.attr('xlink:href', 'sprite.svg#eye-close'); // 👁 закрытый глаз
    } else {
      $input.attr('type', 'password');
      $svgUse.attr('xlink:href', 'sprite.svg#eye'); // 👁 обычный глаз
    }
  });
});
