var activeBlock = undefined;
var fraction = undefined;
var audio = undefined;

// Здесь мы вызываем событие загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    // Здесь мы к каждому блоку цепляем событие клика
    document.querySelectorAll('.card').forEach(block => block.addEventListener('click', function() {
        // Меняем состояние блока
        changeState(block);
    }));
});

function playMusic(music) {
    if (audio !== undefined) {
        audio.pause();
        audio = undefined;
    }
    audio = new Audio(music);
    audio.play();
}

function yesno1(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
    labelvar.innerHTML = "Выключить звуковые эффекты";
    }
    else {
    labelvar.innerHTML = "Включить звуковые эффекты";
    }
}

function yesno2(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
    labelvar.innerHTML = "Выключить музыку";
    }
    else {
    labelvar.innerHTML = "Включить музыку";
    }
}

// Здесь мы меняем состояние блока
function changeState(block) {
    if (activeBlock != undefined) {
        if (block.id == activeBlock.id) {
            return;
        }
    } else {
        activeBlock = document.querySelector('.card');
    }

    // Для текущего активного блока (который станет сейчас неактивным) ставим изображение, что он неактивный
    activeBlock.style.backgroundImage = 'url("img/card-background.png")';

    if (block.id == 'castle') {
        // Если раса первая, то ставим фон для первой расы
        document.body.style.backgroundImage = 'url("img/castle.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-castle.png")';
        document.getElementById('border').src = 'img/border-castle.png'
        document.getElementById('border-444').srcset = 'img/border-castle-444.png';
        document.getElementById('border-767').srcset = 'img/border-castle-767.png';
        playMusic('Music/Castle.mp3');
        fraction = 'castle';
    } else if (block.id == 'stronghold') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/stronghold.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-stronghold.png")';
        document.getElementById('border').src = 'img/border-stronghold.png';
        document.getElementById('border-444').srcset = 'img/border-stronghold-444.png';
        document.getElementById('border-767').srcset = 'img/border-stronghold-767.png';
        playMusic('Music/Stronghold.mp3');
        fraction = 'stronghold';
    } else if (block.id == 'tower') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/tower.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-tower.png")';
        document.getElementById('border').src = 'img/border-tower.png';
        document.getElementById('border-444').srcset = 'img/border-tower-444.png';
        document.getElementById('border-767').srcset = 'img/border-tower-767.png';
        playMusic('Music/Tower.mp3');
        fraction = 'tower';
    } else if (block.id == 'inferno') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/inferno.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-inferno.png")';
        document.getElementById('border').src = 'img/border-inferno.png';
        document.getElementById('border-444').srcset = 'img/border-inferno-444.png';
        document.getElementById('border-767').srcset = 'img/border-inferno-767.png';
        playMusic('Music/Inferno.mp3');
        fraction = 'tower';
    } else if (block.id == 'dungeon') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/dungeon.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-dungeon.png")';
        document.getElementById('border').src = 'img/border-dungeon.png';
        document.getElementById('border-444').srcset = 'img/border-dungeon-444.png';
        document.getElementById('border-767').srcset = 'img/border-dungeon-767.png';
        playMusic('Music/Dungeon.mp3');
        fraction = 'dungeon';
    } else if (block.id == 'fortress') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/fortress.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-fortress.png")';
        document.getElementById('border').src = 'img/border-fortress.png';
        document.getElementById('border-444').srcset = 'img/border-fortress-444.png';
        document.getElementById('border-767').srcset = 'img/border-fortress-767.png';
        playMusic('Music.mp3');
        fraction = 'fortress';
    } else if (block.id == 'citadel') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/citadel.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-citadel.png")';
        document.getElementById('border').src = 'img/border-citadel.png';
        document.getElementById('border-444').srcset = 'img/border-citadel-444.png';
        document.getElementById('border-767').srcset = 'img/border-citadel-767.png';
        playMusic('Music.mp3');
        fraction = 'citadel';
    } else if (block.id == 'necropolis') {
        // Если раса вторая, то ставим фон для второй расы
        document.body.style.backgroundImage = 'url("img/necropolis.jpg")';
        // Ставим изображение активного блока
        block.style.backgroundImage = 'url("img/active-card-necropolis.png")';
        document.getElementById('border').src = 'img/border-necropolis.png';
        document.getElementById('border-444').srcset = 'img/border-necropolis-444.png';
        document.getElementById('border-767').srcset = 'img/border-necropolis-767.png';
        playMusic('Music/Necropolis.mp3');
        fraction = 'necropolis';
    }
    // Записываем текущий блок, как активный
    activeBlock = block;
}