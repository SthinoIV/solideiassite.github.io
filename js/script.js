

$(document).ready(function(){

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100){
            $('.navbar').addClass('cng-navbar');
            $('.logo').addClass()
        } else {
            $('.navbar').removeClass('cng-navbar');
        };           
    })
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100){
            $('.header-links').addClass('cng-social');
            // $('.logo').addClass()
        } else {
            $('header-links').removeClass('cng-social');
        };           
    })


        // adding image toogle
        
        window.addEventListener('scroll', function() {
            var logo = document.getElementById('logo');
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition >= 100) {
                logo.src = './assets/logo.svg';
            } else {
                logo.src = './assets/logo2.svg';
            }
        });
    })
    function updateLogoForMobile() {
        var logo = document.getElementById("logo"); // Assuming your logo has an id of "logo"
        
        if (window.matchMedia("(max-width: 768px)").matches) {
          // Change the logo source for mobile
          logo.src = "./assets/logo.svg"; // Replace with the path to the mobile version of the logo
        } else {
          // Change the logo source for desktop
          logo.src = "./assets/logo.svg"; // Replace with the path to the desktop version of the logo
        }
      }
      
      // Call the function on page load and whenever the window is resized
    //   window.addEventListener("load", updateLogoForMobile);
      window.addEventListener("resize", updateLogoForMobile);
      


    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    // owl carousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                itens: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    })
    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children('i').attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>')
            }
            else{
                $(this).children('span').html('<i class = "fas fa-plus"></i>')
            }
        })
    })

    // testimonial carousel
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    })
    
    // costumer
    $('.costumer .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                itens: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }

    })