
$(document).keyup(function (key) {
  if (key.keyCode != 'null' && !isResizeble) {
    let audio = new Audio();

    if (key.keyCode == '35') {
      audio.src = 'assets/sounds/Monstor109 - Chika Dance.wav';

      const $bgChika = $('#background-chika');

      $bgChika.css('background', 'url("assets/img/index.jpg")');
      $bgChika.css('backgroundPosition', 'cemter center');
      $bgChika.css('backgroundRepeat', 'no-repeat');
      $bgChika.css('backgroundSize', 'cover');

      const $mouseParalax = $('.mouse-parallax-bg');

      $(window).on('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        $mouseParalax.css('transform', 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)');
      });

      audio.volume = 1;
    } else {
      audio.src = 'assets/sounds/MERHI - M-fi.mp3';
      document.body.style.background = '#192335';
      document.body.style.transition = 'background 1s ease';
      audio.volume = 0.3;
    }

    initsnow();
    $('#pressanykey').remove();

    audio.autoplay = true;
    audio.currentTime = 0;

    isResizeble = true; // Если код выполнен, то повторно его не выполнять
  }
});