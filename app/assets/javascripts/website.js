$(document).ready(function() {
    
    function toggleOpen() {
        $("#mobile-navbar").animate({
            height: "+320"
        }, 500, function(){
            
        });
    }
    
    function toggleClose() {
        $("#mobile-navbar").animate({
            height: "-320"
        }, 500, function(){
            
        });
    };
    
    var open = false;
    var sticky = false; 
    
    function toggle() { 
        open = !open; 
        if (open) {
            toggleOpen()
        } else {
            toggleClose()
        };
        
    };
    
    function goSticky(){
        sticky = true;
        $('#navbar').removeClass('framed');
        $('#navbar').addClass('sticky');
        $('#navbar').css('top','0px')
    }
    
    function goFramed(){
        sticky = false;
        $('#navbar').removeClass('sticky');
        $('#navbar').addClass('framed');
        $('#navbar').css('top',$('#front').height() * 0.7);    
    }
    
    function evaluateBar(){
        if ($(window).scrollTop() > ( $('#front').height() * 0.7 )  ) {
            if( !sticky ) goSticky();
        } else {
            if( sticky ) goFramed();
        }
    }
    
     $('#menu-btn').click( function( e ){
         toggle();
         e.stopPropagation();
     } );
     
    $(window).bind('scroll', evaluateBar );
    $(document).resize( evaluateBar )
    
    $('#mapsblock').click( function( e ){
        $('#mapsblock').hide();
        e.stopPropagation();
    });
    
    $('iframe').first().bind('mousewheel', function(e){
        e.stopPropagation();
        e.preventDefault();
    });
    
    $(document).click( function(){
        $('#mapsblock').show();
        if( open ) toggle();
    })
    
     $("a.button").each(function( i, e ) { 
        $( e ).click(function() {
            $('html, body').animate({
                scrollTop: $( "#" + $( e ).data("anchor") ).offset().top - 100
            }, 750);
        });
    });
    
    $("#cookie").click(function() {
        $("#cookie").animate({
            height: "-20px",
            display: "none",
            opacity: "0.0"
        }, 500, function(){
        });
    });
    
    
    if( navigator.userAgent.match(/iPad/i) != null ){
	    viewport = document.querySelector("meta[name=viewport]");
	    viewport.setAttribute('content', 'width=1000px, user-scalable=0');
    }
    
    if( $(window).width() >= 800 ){
      $('#navbar').css('display','none');
      setTimeout( function(){
       goFramed();   
       $('#navbar').css('display','block');
      }, 250)
    }
    
    
});

    
   
    
    