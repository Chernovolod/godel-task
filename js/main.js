let man                 = document.querySelector('.man');
let style       = window.getComputedStyle(man);


document.onkeydown = (event) => {

    (event.key === 'ArrowRight') ? right() :
        (event.key === 'ArrowLeft') ? left() :
            (event.key === 'ArrowDown') ? down() :
                (event.key === 'ArrowUp') ? up() : null

};

function right() {
    man.className = 'right';
if(parseInt(style.left) < 400)
    man.style.left = parseInt(style.left) + 70 + 'px' ;
}

function left() {
    man.className = 'left';

    if(parseInt(style.left) > 55) {
        man.style.left = parseInt(style.left) - 75 + 'px';
    }
}

function up() {
    man.className = 'up';

    if(parseInt(style.bottom) < 490) {
        man.style.bottom = parseInt(style.bottom) + 75 + 'px';
    }
}

function down() {
    man.className = 'down';

    if(parseInt(style.bottom) >160) {
        man.style.bottom = parseInt(style.bottom) - 75 + 'px';
    }
}



