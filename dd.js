    function render (){
        ctx.drawImage(bg, 0, 0, 1500, 1500);
        for (i in plv) ctx.drawImage(lodkav, plv[i].x, plv[i].y, 60, 50);
        ctx.drawImage(torpedaSprites, bul.x, bul.y, 100, 90);
        for (i in bul)
            ctx.drawImage(torpedaSprites, bul[i].x, bul[i].y, 30, 30);
        ctx.drawImage(lodka, ship.x, ship.y, 100, 90);
        
        //столкновения
        for (i in plv){
            if(ship.x<plv[i].x+(30)
            &&
            ship.x+(90)>plv[i].x
            && ship.y<plv[i].y+(20)
            && ship.y+(70)>plv[i].y){
            alert("слив+тильт");
            }
            }

        }

        
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

//var pressedUp = false;
//var pressedDown = false;
var pX = -10;
var pY = -40;
    
    //позиция plv
    var plv = [];
    var bul = [];
    var timer=0;
    var ship={x:300, y:600}
    

    //подкрепляем картиночки
    var bg = new Image();
    bg.src="img/voda.png";
    
    var lodka = new Image();
    lodka.src="img/pl.png";
    
    var lodkav = new Image();
    lodkav.src="plv.png";
    
    var torpedaSprites = new Image();
    torpedaSprites.src="torpeda.png"

    plv.push({x:1300, y:300, dx:10, dy:0});
    
    //управление лодкой курсором
document.addEventListener("keydown", onDocumentKeydown);
function onDocumentKeydown(event) {
    if (event.key == 'ArrowUp') {
        ship.y -= 10;
    }
    else if (event.key == 'ArrowDown') {
        ship.y += 10;
    }
    else if (event.key == 'ArrowRight') {
        ship.x += 10;
    }
    else if (event.key == 'ArrowLeft') {
        ship.x -= 10;
    }

}



    //ЗАГРУЗКА ИГРЫ
    bg.onload = function(){
    game();
    }
    
    //основной игровой цикл
    function game(){
    update();
    render();
    requestAnimationFrame(game);
    }
    
function update() {
    timer++;
    if (timer % 90 == 0) {
        plv.push({
            x: 1450,
            y: Math.random() * 1450,
            dx: Math.random() * 8 + 5,
            dy: 0
        });
    }

   
        //выстрелы
    if (timer % 90 == 0) {
        for (var i = 0; i < plv.length; i++) {
            bul.push({ x: plv[i].x + 10, y: plv[i].y, dx: 15, dy: 0 })
        }
    }
    for (i in bul) {
        if (timer % 8 == 0) {
            bul[i].x = bul[i].x-80 - bul[i].dx;
            bul[i].y = bul[i].y + bul[i].dy;
            if (bul[i].y < -30) bul.splice(i, 1)
        }
    }
    //function move_bullets() {
        //var bul_del = 0;
      //  for (var i = bul.length - 1; i >= 0; i--) {
        //    bul[i].y += 7;
          //  if (cls_you_bul(i) == 1)
            //    return 1;

            //if (bul_del==0)
            //if (bul[i].y > 550)
              //  bul.splice(i, 1);
        //}

//    }
  
    //физика plv
    for (i in plv) {
        plv[i].x = plv[i].x - plv[i].dx;
        plv[i].y = plv[i].y - plv[i].dy;

        //границы plv
        if (plv[i].x >= 1500) plv.splice(i, 1);
        if (plv[i].y >= 1500 || plv[i].y < 0) plv[i].dy = -plv[i].dy;

       for (j in bul) {
            if (Math.abs(ship.x + 50 - bul[j].x - 15) < 50 && Math.abs(ship.y - bul[j].y) < 25) {
                alert("слив+тильт от ракеты");
            }
        }
        /*for (i in bul) {
            if (bul[i].x == ship.x)   (bul[i].y == ship.y) 
                alert("слив+тильт");
            }*/
            }
            
    }
    //торпед