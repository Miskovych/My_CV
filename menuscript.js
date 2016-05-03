// JavaScript File
$(document).ready(function() {
    $('.artviev').addClass('art').removeClass('artviev')
    $('.artviev').show();
    $("a").click(function(event) {
        event.preventDefault();
    });
    $(window).scroll(function() {
        var bo = $(this).scrollTop();

        if (bo >= 100) {
            $('#hid').slideUp('100');
            $('#mobile').css({
                top: '0px'
            });
            $('#headerspace').css({
                height: '235px'
            })

        };
        if (bo < 100) {
            $('#hid').slideDown('fast');
            $('#mobile').css({
                top: '169px'
            });
            $('#headerspace').css({
                height: '205px'
            });

        };
    })

    $('#hellolink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();


    })

    $('#edulink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();

    })

    $('#skillslink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();

    })

    $('#conlink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();

    })

    $('#photolink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();

    })

    $('#mcvlink').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev')
        $(linkHref).show();

    })

    $('article').click(function() {
      
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(this).addClass('artviev')
        $(this).show();
    })
    $('header').click(function(){
      
    
    $('.art').show();
    $('.artviev').addClass('art').removeClass('artviev')
    }
        )
})