$(document).ready(function() {

// 1. Получаем значение атрибута src у картинки
// const srcValue = $('#imgHolder img').attr('src');
// alert(srcValue);

const $carImg = $('#imgHolder img');

// 2. Меняем значение атрибута src у картинки
// $carImg.on('click', function() {
//     $(this).attr('src', 'img/blueCar.png');
// });


// $('#colorsSelector .colorItem.colorBlue').on('click', function() {
//     $carImg.attr('src', 'img/blueCar.png');
// });

// $('#colorsSelector .colorItem.colorSilver').on('click', function() {
//     $carImg.attr('src', 'img/silverCar.png');
// });

// $('#colorsSelector .colorItem.colorRed').on('click', function() {
//     $carImg.attr('src', 'img/redCar.png');
// });

// $('#colorsSelector .colorItem.colorBlack').on('click', function() {
//     $carImg.attr('src', 'img/blackCar.png');
// });

// $('#colorsSelector .colorItem.colorWhite').on('click', function() {
//     $carImg.attr('src', 'img/whiteCar.png');
// });

// $('#colorsSelector .colorItem.colorOrange').on('click', function() {
//     $carImg.attr('src', 'img/orangeCar.png');
// });

// $('#colorsSelector .colorItem.colorGray').on('click', function() {
//     $carImg.attr('src', 'img/grayCar.png');
// });

// 4. ЕДИНОЕ действие для всех цветов
// $('#colorsSelector .colorItem').on('click', function() {
//     let imgPath;
//     imgPath = $(this).attr('data-img-path');
//     $carImg.attr('src', imgPath);
// });

// 5. ЕДИНОЕ действия для всеч цветов с эффектом fadeOut() fadeIn()

$('#colorsSelector .colorItem').on('click', function() {
    let imgPath;
    imgPath = $(this).attr('data-img-path');
    $carImg.fadeOut(300, function() {
        $carImg.attr('src', imgPath).fadeIn(300);
    });
    
});




});