var lang = undefined;

$('.form-registration').find('input').attr('autocomplete', 'off');

$('body').on('click', '.password-control', function(){
	if ($('#exampleInputPassword1').attr('type') == 'password'){
		$(this).addClass('view');
		$('#exampleInputPassword1').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#exampleInputPassword1').attr('type', 'password');
	}
	return false;
});

$('body').on('click', '.password-control2', function(){
	if ($('#exampleInputPassword2').attr('type') == 'password'){
		$(this).addClass('view');
		$('#exampleInputPassword2').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#exampleInputPassword2').attr('type', 'password');
	}
	return false;
});

$('#run-link').click(function() {
    if (fraction == undefined) {
        alert('Может ты уже выберешь фракцию, не?!');
        return;
    }

   $('#border-faction').addClass('animate__animated animate__slideOutUp');
   $('#border-faction').on('animationend', function() {
       $(location).prop('href', 'map-selection.html');
   });
});

$('#registration-login').click(function() {
   $('#border-registration').addClass('animate__animated animate__slideOutUp');
   $('#border-registration').on('animationend', function() {
       $(location).prop('href', 'login.html')
   });
});

$('#registration').click(function() {
    let validator = new Validator();
    let message = document.querySelector('.valid-data');
    let fields = [
        document.getElementById('exampleInputEmail1').value,
        document.getElementById('exampleInputPassword1').value,
        document.getElementById('exampleInputPassword2').value,
        document.getElementById('exampleCheck1')
    ];
    let data = {
        "email": [fields[0], 'required|email'],
        "password": [fields[1], 'required|min_len:8|max_len:15'],
        "sumbit_password": [fields[2], 'required|min_len:8|max_len:15']
    };
    let isValid = validator.validate(JSON.stringify(data));
    if (message == undefined) {
        message = document.createElement('div');
        message.classList.add('valid-data');
        message.innerHTML = '';
        document.querySelector('.form-registration').appendChild(message);
    }
    if (!isValid) {
        if (message != undefined) {
            message.classList.remove('error-message-data-mismatch', 'error-message-accept-agreement');
            message.classList.add('error-message-not-valid-data');
            message.innerHTML = 'Некорректно введён email';
        }
        return;
    }
    if (isValid && fields[1] !== fields[2]) {
        if (message != undefined) {
            message.classList.remove('error-message-accept-agreement', 'error-message-not-valid-data');
            message.classList.add("error-message-data-mismatch");
            message.innerHTML = 'Пароли не совпадают';
        }
        return;
    }
    if (isValid && fields[1] === fields[2] && !fields[3].checked) {
        if (message != undefined) {
            message.classList.remove('error-message-data-mismatch', 'error-message-not-valid-data');
            message.classList.add('error-message-accept-agreement');
            message.innerHTML = 'Не приняты условия';
        }
        return;
    }
    if (message != undefined) {
        document.querySelector('.form-registration').removeChild(message);
        document.getElementById('message1').style.display = 'inline-block';
    }
    /*fetch('http://127.0.0.1:8000/user/registration', {
        method: 'POST',
        body: JSON.stringify({
            'email': fields[0],
            'password': fields[1]
        })
    }).then((response) => {
        return response.text().then(function(text) {
            alert('test');
        });
    });*/
   $('#border-registration').addClass('animate__animated animate__slideOutUp');
   $('#border-registration').on('animationend', function() {
       $(location).prop('href', 'get-code-reg.html')
   });
});

$('#login').click(function() {
    let validator = new Validator();
    let fields = [
        document.getElementById('validationCustom01').value,
        document.getElementById('exampleInputPassword1').value
    ];
    let data = {
        "email": [fields[0], 'required|email'],
        "password": [fields[1], 'required|min_len:8|max_len:15']
    };
    let isValid = validator.validate(JSON.stringify(data));
    let message = document.querySelector('.valid-data-login');
    if (!isValid) {
        if (message == undefined) {
            message = document.createElement('div');
            message.classList.add('valid-data-login', 'error-message-invalid-login-or-password');
            message.innerHTML = 'Неверные логин или пароль';
            document.querySelector('.form-login').appendChild(message);
        }
        return;
    }
    if (message != undefined) {
        document.querySelector('.form-login').removeChild(message);
    }
    /*fetch('http://127.0.0.1:8000/user/login', {
        method: 'POST',
        body: JSON.stringify({
            'email': fields[0],
            'password': fields[1]
        })
    }).then((response) => {
        return response.text().then(function(text) {
            alert(text);
        });
    });*/
    $('#border-login').addClass('animate__animated animate__slideOutUp');
    $('#border-login').on('animationend', function () {
        $(location).prop('href', 'index.html')
    });
});

$('#btn-login').click(function() {
   $('#border-login').addClass('animate__animated animate__slideOutUp');
   $('#border-login').on('animationend', function() {
       $(location).prop('href', 'recovery-password.html')
   });
});

$('#btn-login').click(function() {
    $('#border-login').addClass('animate__animated animate__slideOutUp');
    $('#border-login').on('animationend', function() {
        $(location).prop('href', 'recovery-password.html')
    });
 });

$('#recovery').click(function() {
   $('#border-recovery').addClass('animate__animated animate__slideOutUp');
   $('#border-recovery').on('animationend', function() {
       $(location).prop('href', 'get-code.html')
   });
});

$('#code').click(function() {
   $('#border-code').addClass('animate__animated animate__slideOutUp');
   $('#border-code').on('animationend', function() {
       $(location).prop('href', 'login.html')
   });
});

$('#code-reg').click(function() {
   $('#border-code-reg').addClass('animate__animated animate__slideOutUp');
   $('#border-code-reg').on('animationend', function() {
       $(location).prop('href', 'login.html')
   });
});

$('#ru').click(function() {
    if (lang !== 'ru') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'ru';
        $('#ru').addClass('lang-button-active');
    }
});

$('#en').click(function() {
    if (lang !== 'en') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'en';
        $('#en').addClass('lang-button-active');
    }
});

$('#de').click(function() {
    if (lang !== 'de') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'de';
        $('#de').addClass('lang-button-active');
    }
});

$('#zh').click(function() {
    if (lang !== 'zh') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'zh';
        $('#zh').addClass('lang-button-active');
    }
});

$('#fr').click(function() {
    if (lang !== 'fr') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'fr';
        $('#fr').addClass('lang-button-active');
    }
});

$('#pt').click(function() {
    if (lang !== 'pt') {
        $('#' + lang).removeClass('lang-button-active');
        lang = 'pt';
        $('#pt').addClass('lang-button-active');
    }
});

$('#settings').click(function() {
    $('#' + lang).addClass('lang-button-active');
});

$('#apply').click(function() {
    if (localStorage['yt-widget'] !== undefined) {
        let yt_widget = JSON.parse(localStorage['yt-widget']);
        yt_widget.lang = lang;
        localStorage['yt-widget'] = JSON.stringify(yt_widget);
    }
    $('#border-setting').addClass('animate__animated animate__slideOutUp');
    $('#border-setting').on('animationend', function() {
        $(location).prop('href', 'index.html')
    });
 });

 (function () {
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    var forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function isNull(data) {
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] == undefined) {
                return true;
            }
        }
    } else {
        return data == undefined;
    }
    return false;
}

$(document).ready(function() {
    if (localStorage['yt-widget'] == undefined) {
        localStorage['yt-widget'] = JSON.stringify({'lang': 'en', 'active': true});
    }
    lang = localStorage['yt-widget'] != undefined ? JSON.parse(localStorage['yt-widget']).lang : 'en';
 });

 var owl = $("#owl-demo-2");
   if(owl.length){
     $("#owl-demo-2").owlCarousel({
         loop: true,
         nav:false,
         pagination : true,
         dots:false,
         center: false,
         rewind: false,
         mouseDrag: true,
         touchDrag: true,
         pullDrag: true,
         freeDrag: false,
         margin: 0,
         stagePadding: 0,
         merge: false,
         mergeFit: true,
         startPosition: 0,
         rtl: false,
         smartSpeed: 250,
         fluidSpeed: false,
         dragEndSpeed: false,
         responsive: {
            0: {
               items: 1,
               nav:false,
               loop: false
            },
            560: {
               items: 2,
               nav: false,
               loop: false
            },
            768: {
               items: 3,
               nav: false,
               loop: false
            },
            992: {
               items: 4,
               nav:false,
               loop: false
            },
            1200: {
               items: 4,
               nav:false,
               loop: false
            },
            1300: {
               items: 5,
               nav:false,
               loop: false
            }
         },
         responsiveRefreshRate: 200,
         responsiveBaseElement: window,
         fallbackEasing: "swing",
         info: false,
         nestedItemSelector: false,
         itemElement: "div",
         stageElement: "div",
         refreshClass: "owl-refresh",
         loadedClass: "owl-loaded",
         loadingClass: "owl-loading",
         rtlClass: "owl-rtl",
         responsiveClass: "owl-responsive",
         dragClass: "owl-drag",
         itemClass: "owl-item",
         stageClass: "owl-stage",
         stageOuterClass: "owl-stage-outer",
         grabClass: "owl-grab",
         autoHeight: false,
         lazyLoad: false
     });
   }

   var owl = $("#owl-demo-3");
   if(owl.length){
     $("#owl-demo-3").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        center: true,
        nav:true,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        items:2,
        loop:true,
        autoWidth:true,
        responsive:{
            600:{
                items:2
            }
         },
         responsiveRefreshRate: 200,
         responsiveBaseElement: window,
         fallbackEasing: "swing",
         info: false,
         nestedItemSelector: false,
         itemElement: "div",
         stageElement: "div",
         refreshClass: "owl-refresh",
         loadedClass: "owl-loaded",
         loadingClass: "owl-loading",
         rtlClass: "owl-rtl",
         responsiveClass: "owl-responsive",
         dragClass: "owl-drag",
         itemClass: "owl-item",
         stageClass: "owl-stage",
         stageOuterClass: "owl-stage-outer",
         grabClass: "owl-grab",
         autoHeight: false,
         lazyLoad: false
     });
   }
 
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});