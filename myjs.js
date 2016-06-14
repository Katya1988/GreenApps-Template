    $(document).ready(function(){

     $('.parallax').parallax();
	 $(".button-collapse").sideNav();
     // $('.header-left').css('display', 'none');
     // $('.header-left').fadeIn(1500);
	 $('.acc-active').css('display', 'block');
     $('.acc-h').on('click', f_accordeon);
     $('.small-pic').on('click', f_gal);


       function f_accordeon(){
       	$('.acc-h').not(this).next().slideUp(500);
       	$(this).next().slideDown('slow');
       }

       function f_gal(){
       	$('.main-pic').attr('src', $(this).attr('src'))
       }

       $(window).scroll(function() {
    	var height = $(window).scrollTop();
    	if(height  > $("#subscribe").offset().top) {
        $("nav").css('background-color', '#131F2E');
   		 }
	
		else {
		$("nav").css('background-color', 'transparent');

		}

	   });

	   $("#up").hide();

      $(window).scroll(function() {
    	var height = $(window).scrollTop();
    	if(height  > $("#subscribe").offset().top) {
        $("#up").show();
   		 }
	
		else {
		$("#up").hide();
		}
	});	

      $( "#up" ).click(function( event ) {
  		event.preventDefault();
  		$("html, body").animate({scrollTop: 0}, "slow");
		});

      $('.form_bottom').on('click', posol);
      function posol() {
        console.log('dddd');
        $.get(
                'mail.php',
                {
                    "name": $('#cont-form input[name=name]').val(),
                    "mail": $('#cont-form input[name=mail]').val(),
                    "message": $('#cont-form textarea[name=message]').val(),
                },
                ifSuccess

        )
    }

    function ifSuccess(data) {
        console.log(data);
        var a=data.trim();
        if (a=='1') {
           
            $('.sent').css('display', 'block');

            $('.sent').click(function () {
                $('.sent').fadeOut(2000);
            });

        }

       }


	// validation of forms

	// contact form
		$("#cont-form").validate({

       rules:{

            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            mail:{
                required: true,
                minlength: 6,
                email: true,
                
            },
       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },

            mail:{
                required: "Это поле обязательно для заполнения",
                minlength: "Email должен быть минимум 6 символа",
                email: "Неверный формат адреса",
                
            },

       }

    });

		// subscribe form

		$("#subs").validate({

       rules:{

            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            mail:{
                required: true,
                minlength: 6,
                email: true,
                
            },
       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },

            mail:{
                required: "Это поле обязательно для заполнения",
                minlength: "Email должен быть минимум 6 символа",
                email: "Неверный формат адреса",
                
            },

       }

    });



    });