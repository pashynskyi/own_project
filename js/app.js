$(document).ready(function() {

    const currencyUr1 = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
    let uahUsdRate = 0;

    $.ajax({

        url: currencyUr1,
        cache: false,
        success: function(html) {
            console.log(html[2].sale);
            uahUsdRate = html[2].sale;
            calculateUSD();
        }
            
    });

    let modelSpecs,
        modelPrice,
        modelSpecsHolder,
        modelPriceHolder,
        modelPriceUSDHolder;

    modelSpecsHolder = $('#modelSpecs');
    modelPriceHolder = $('#modelPrice');
    modelPriceUSDHolder = $('#modelPriceUSD');

    modelPrice = 0;
    modelSpecs = '';

    // При старте страницы
    calculatePrice();
    compileSpecs();


    // После переключение радио кнопок
    $('#autoForm input').on('change', function() {
        calculatePrice();
        compileSpecs();
        calculateUSD();
    });

    $('#imgHolder .button').on('click', function() {
        alert('Заказ принят, ожидайте звонка.');
    })
    
    
    $('#colorsSelector .colorItem').on('click', function() {
        let imgPath = $(this).attr('data-img-path');
        $('#imgHolder img').attr('src', imgPath);
    });




    function calculatePrice() {
        let modelPriceEngine = $('input[name=engine]:checked', '#autoForm').val();
        let modelPriceTransmission = $('input[name=transmission]:checked', '#autoForm').val();
        let modelPricePackage = $('input[name=package]:checked', '#autoForm').val();

        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = parseInt(modelPricePackage);

        modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
        // console.log(modelPrice);
        modelPriceHolder.text( '₴ ' + addSpace(modelPrice));
    };

    function compileSpecs() {
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';
        modelSpecsHolder.text(modelSpecs);
    };

    function addSpace(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    };

   

    function calculateUSD() {
        let modelPriceUSD = modelPrice / uahUsdRate;
        modelPriceUSDHolder.text( '$ ' + addSpace(modelPriceUSD.toFixed(0)));
    }

});




