$(document).ready(function() {
    $('.artviev').addClass('art').removeClass('artviev')
    
    $('.artviev').show();
    
    $('a').click(function(event) {
        event.preventDefault();
    });
    
    $('#btn-send').click(function() {
        $.ajax({
            url: "https://formspree.io/andrinau3@gmail.com",
            method: "POST",
            data: {
                email: email.value,
                message: msg.value,
                name: name.value
                
            },
            dataType: "json"
        }).done(function() {
            $('#container').html('<h1>Thank you!</h1>')
        });
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
            });

        }
        if (bo < 100) {
            $('#hid').slideDown('fast');
            $('#mobile').css({
                top: '169px'
            });
            $('#headerspace').css({
                height: '205px'
            });

        }
    });

    $('#mobile a').click(function() {
        var linkHref = $(this).attr('href');
        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(linkHref).addClass('artviev');
        $(linkHref).show('fast');

    });

    $('article').click(function() {

        $('.artviev').addClass('.art').removeClass('.artviev');
        $('.art').hide().removeClass('.art');
        $(this).addClass('artviev');
        $(this).show();
    });
    
    $('header').click(function() {
        $('.art').show();
        $('.artviev').addClass('art').removeClass('artviev');
    });
    
    $('#mobile36 a').click(function(event) {
        $('article').hide();
        var a=$(this).attr('href');
        $(a).show('slow');
    })
    
})
   