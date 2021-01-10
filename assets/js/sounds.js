
// Функция показывающая нажатие клавиши и код клавиши.
$(document).keyup(function(e) {

  // console.log(e.key + ', ' + e.keyCode);

});

$(document).keyup(function (key) {

  if (key.keyCode != 'null' && !isResizeble) {
    var audio = new Audio(); // Создаём новый элемент Audio
    if (key.keyCode == '35') { // активируем пасхалку
      audio.src = 'assets/sounds/Monstor109 - Chika Dance.mp3'; // Указываем путь к sound
      document.getElementById('background-chika').style.background = 'url("assets/img/index.jpg")'
      document.getElementById('background-chika').style.backgroundPosition = 'cemter center'
      document.getElementById('background-chika').style.backgroundRepeat = 'no-repeat'
      document.getElementById('background-chika').style.backgroundSize = 'cover'
      audio.volume = 1; // Громкость
    } else {
      audio.src = 'assets/sounds/MERHI - M-fi.mp3'; // Указываем путь к sound
      document.body.style.background = '#192335';
      document.body.style.transition = 'background 1s ease';
      audio.volume = 0.3; // Громкость
    }
    
    initsnow();
    document.getElementById('pressanykey').remove();
    audio.autoplay = true; // Автоматически запускаем
    audio.currentTime = 0; // установить секунду

    let bg = document.querySelector('.mouse-parallax-bg');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });

    isResizeble = true; // Если код выполнен, то повторно его не выполнять
  }

});