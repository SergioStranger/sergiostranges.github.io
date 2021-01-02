var isResizeble = false;

// Максимальное количество снежинок
var snowmax=80;
var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF");
var snowtype=new Array("Arial Black","Arial Narrow","Comic Sans MS");
var snowletter="*";
//Скорость
var sinkspeed=0.5;
//Максимальный размер снежинок
var snowmaxsize=30;
//Минимальный размер снежинок
var snowminsize=8

var snow=new Array();
var marginbottom;
var marginright;
var timer;
var i_snow=0;
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent;
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
var ns6=document.getElementById&&!document.all;
var opera=browserinfos.match(/Opera/);

function randommaker(range) {    
  rand=Math.floor(range*Math.random());
  return rand;
}

function initsnow() {
  if (ie5 || opera) {
    marginbottom = document.body.clientHeight;
    marginright = document.body.clientWidth;
  }
  else if (ns6) {
    marginbottom = window.innerHeight;
    marginright = window.innerWidth;
  }
  var snowsizerange=snowmaxsize-snowminsize;
  for (i=0;i<=snowmax;i++) {
    crds[i] = 0;      
    lftrght[i] = Math.random()*15;      
    x_mv[i] = 0.03 + Math.random()/10;
    snow[i]=document.getElementById("s"+i);
    snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)];
    snow[i].size=randommaker(snowsizerange)+snowminsize;
    snow[i].style.fontSize=snow[i].size;
    snow[i].style.color=snowcolor[randommaker(snowcolor.length)];
    snow[i].sink=sinkspeed*snow[i].size/5;
    snow[i].posx=randommaker(marginright-snow[i].size);
    snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size);
    snow[i].style.left=snow[i].posx;
    snow[i].style.top=snow[i].posy;
  }
  movesnow();
}

function movesnow() {
  for (i=0;i<=snowmax;i++) {
    crds[i] += x_mv[i];
    snow[i].posy+=snow[i].sink;
    snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]) + 'px';
    snow[i].style.top=snow[i].posy + 'px';
    if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])) {
      snow[i].posx=randommaker(marginright-snow[i].size);
      snow[i].posy=0;
    }
  }
  var timer=setTimeout("movesnow()",30);
}

for (i=0;i<=snowmax;i++) {
  document.write("<span id='s"+i+"' style='position:fixed;top:-"+snowmaxsize+"; color: #fff0;'>"+snowletter+"</span>")
}

$(document).keypress(function (key) {
	if (key.which != 'null' && !isResizeble) {
		initsnow();
		document.getElementById('pressanykey').remove();
		document.body.style.background = '#192335';
		setTimeout(() => { 
			var audio = new Audio(); // Создаём новый элемент Audio
	  	audio.src = 'assets/sounds/MERHI - M-fi.mp3'; // Указываем путь к звуку "клика"
	  	audio.autoplay = true; // Автоматически запускаем
	  	audio.volume = 0.3; // Громкость
	  	audio.currentTime = 0; // установить секунду
		}, 1200);
		

		isResizeble = true;
	}
});