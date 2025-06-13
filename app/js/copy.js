$(document).ready(function () {
  $('.copy-js').on('click', function () {
    const $parent = $(this).parent(); // Родитель, в котором .item-id и .id-tooltip
    const text = $parent.find('.item-id').text().trim();
    const $tooltip = $parent.find('.id-tooltip');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showTooltip($tooltip);
      }).catch(() => {
        fallbackCopy(text, $tooltip);
      });
    } else {
      fallbackCopy(text, $tooltip);
    }
  });

  function fallbackCopy(text, $tooltip) {
    const $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).css({ position: 'fixed', top: 0, left: 0 }).focus().select();
    document.execCommand('copy');
    $temp.remove();
    showTooltip($tooltip);
  }

  function showTooltip($tooltip) {
    $('.id-tooltip').not($tooltip).hide(); // Прячем все остальные
    $tooltip.stop(true).fadeIn(150);
    setTimeout(() => {
      $tooltip.fadeOut(150);
    }, 2000);
  }
});
