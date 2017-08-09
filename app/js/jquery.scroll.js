var actSection;
var mousewheelevt;
var scrollBlock;
var countSection;

$(document).ready(function() {
    countSection = $('.section').length - 1;
    scrollBlock = false;
    actSection = getSection();
    mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    
    arrawUp();
    activeMenu();
    
    console.log(actSection);

    $("body")
        .css("overflow", "hidden")
        .bind(mousewheelevt, function(e){
            if (scrollBlock === false) {
                console.log(actSection);
                scrollBlock = true;
                if(isMoveDown(e)) {
                    // down
                    $("body").scrolling(actSection + 1);
                    arrawUp();
                } else {
                    //up
                    $("body").scrolling(actSection - 1);
                    arrawUp();
                } 
            }
        
            e.preventDefault();
    });
});


function isMoveDown(e) {
    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta; //check for detail first, because it is used by Opera and FF
    
    return (delta <= 0);
}


function getSection() {
    var min;
    var actY = $(window).scrollTop();
    console.log("actY=>" + actY);
    


    for (var i = $('.section').length - 1; i >= 0; i--) {
        min = $(".section").eq(i).offset().top;
        console.log("i=>" + i + "[" + min + ']');
        if (actY >= min) {
            console.log("actI => " + i)ng;
            return i;
        }
    }
}


function arrawUp() {
    if (actSection > 0) {
        $(".arrowUp").show().on("click", function(){
            $('body').scrolling(0);
        });
    } else {
        $(".arrowUp").hide();
    }
}


function activeMenu() {
    $(".nav-hero li").on("click", function(e){
        $(".nav-hero li").removeClass("active");
        $(this).addClass("active");
        var href = $(this).find("a").attr("href");
        var parts = href.split("#");

        for (var i = $('.section').length - 1; i >= 0; i--) {
            if($(".section").eq(i).hasClass('section-' + parts[1])) {
                $('body').scrolling(i);
                i = -1;
            }
        }

        e.preventDefault();
    })
}


// Функиця скроллинга
(function($) {
  $.fn.scrolling = function(section){
    actSection = section;

    if (actSection > countSection) {
        actSection = countSection;
        scrollBlock = false;
    } else if (actSection < 0) {
        actSection = 0;
        scrollBlock = false;
    } else {
        var offset = $(".section").eq(actSection).offset();
        if (offset.top !== undefined) {
            $(this).animate({scrollTop: offset.top}, 'slow', function(){
                scrollBlock = false;
            });
        }
    }

    return this;
  };
})(jQuery);