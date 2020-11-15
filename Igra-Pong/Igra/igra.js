var pozicija_p1 = pozicija_p2 = 50;
var debljina_p = 10;
var duzina_p2 = 100;
var duzina_p1;
var kugla_x = kugla_y = 50;
var debljina_k = 5;
var brzina_x = brzina_y = 5;
var rezultat_p1 = 0;
var rezultat_p2 = 0;
var brzina_komp = 6;

function update () {
  kugla_x += brzina_x;
  kugla_y += brzina_y;

  if (kugla_y < 0 && brzina_y < 0) {
    brzina_y = -brzina_y;
  }

  if (kugla_y > canvas.height && brzina_y > 0) {
    brzina_y = -brzina_y;
  }

  if (kugla_x - 5 < 0) {
      if (kugla_y + 5 > pozicija_p1 && kugla_y + 5 < pozicija_p1 + duzina_p1) {
        brzina_x = - brzina_x;
        dy=kugla_y-(pozicija_p1+duzina_p1/2);
        brzina_y=dy*0.3;
      } else {
        rezultat_p2++;
        rest ();
      }
  }

  if (kugla_x + 5 > canvas.width) {
    if (kugla_y + 5 > pozicija_p2 && kugla_y + 5 < pozicija_p2 + duzina_p2) {
      brzina_x = - brzina_x;
      dy=kugla_y-(pozicija_p2+duzina_p2/2);
      brzina_y=dy*0.3;
    } else {
      rezultat_p1++;
      rest ();
    }
  }

  if (kugla_y > pozicija_p2 + duzina_p2 / 2) {
    pozicija_p2 += brzina_komp;
  }
  if (kugla_y <pozicija_p2 + duzina_p1 / 2) {
    pozicija_p2 -= brzina_komp;
  }

  ccanvas.fillStyle = '#7093DB';
  ccanvas.fillRect (0, 0, canvas.width, canvas.height);

  ccanvas.fillStyle = 'Red';
  ccanvas.fillRect (0, pozicija_p1, debljina_p, duzina_p1);

  ccanvas.fillStyle = 'Darkblue';
  ccanvas.fillRect (canvas.width - debljina_p, pozicija_p2, debljina_p, duzina_p2);

  ccanvas.fillStyle = 'Black';
  ccanvas.fillRect (kugla_x - debljina_k / 2, kugla_y - debljina_k / 2, debljina_k, debljina_k);
  ccanvas.font = '30px', 'Arial';
  ccanvas.fillText (rezultat_p1, 100, 30);
  ccanvas.fillText (rezultat_p2, canvas.width - 100, 30);
}

function rest () {
  kugla_x = canvas.width/2;
  kugla_y = canvas.height/2;
  brzina_x = -brzina_x;
  brzina_y = 5;
}

function settings () {
  if (document.getElementById ("easy").checked) {
    var brzina = document.getElementById ("easy").value;
    brzina_x = brzina
    brzina_y = brzina
    duzina_p1 = 200;
  }

  if (document.getElementById ("medium").checked) {
    var brzina = document.getElementById ("medium").value;
    brzina_x = brzina
    brzina_y = brzina
    duzina_p1 = 100;
  }

  if (document.getElementById ("hard").checked) {
    var brzina = document.getElementById ("hard").value;
    brzina_x = brzina
    brzina_y = brzina
    duzina_p1 = 50;
  }
}

function start () {
  if(brzina_x===undefined || brzina_y===undefined) {
    alert ('Izaberite težinu igrice!');
  } else {
      var name = document.getElementById ('name');
      name.parentNode.removeChild (name);
      var choose = document.getElementById ('choose');
      choose.parentNode.removeChild (choose);

      var inp = document.getElementById ('inp');
      inp.style.visibility = 'hidden';
      var start = document.getElementById ('start');
      start.style.visibility = 'hidden';

      var canvas = document.getElementById ('canvas');
      ccanvas = canvas.getContext ('2d');

      this.setInterval (update, 1000/30);
      canvas.addEventListener ('mousemove', function (e) {
        pozicija_p1=e.clientY-duzina_p2/2;
      })
  }
}
