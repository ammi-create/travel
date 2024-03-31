// ハンバーガーメニュー
$(function () {
  $('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.g-navi').addClass('active');
    } else {
      $('.g-navi').removeClass('active');
    }
  });
  $('.nav-wrapper ul li a').click(function () {
    $('.menu-trigger').removeClass('active');
    $('.g-navi').removeClass('active');
  });
});

// スライドショー
$(window).on('load resize', function () {
  var winW = $(window).width();
  var devW = 768;
  if (winW > devW) {
    $(function () {
      $('#main-visual').bgSwitcher({
        images: ['./image/hill2.png', './image/mt2.png', './image/shrine2.png', './image/aqua2.png'],
        interval: 3000,
        loop: true,
        effect: 'fade'
      });
    });
  } else {
    $(function () {
      $('#main-visual').bgSwitcher({
        images: ['./image/sp/hill.png', './image/sp/mt.png', './image/sp/shrine.png', './image/sp/aqua.png'],
        interval: 3000,
        loop: true,
        effect: 'fade'
      });
    });
  }
});

// モーダル機能
$(function () {
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});
