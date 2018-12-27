//function logo
$(document).ready(function () {

    $("#logotipo").on("mouseover", function () {
        $("#banner h1").addClass("efeito");

    }).on("mouseout", function () {
        $("#banner h1").removeClass("efeito");
    });

    //function search
    $("#input-search").on("focus", function () {
        $("li.search").addClass("ativo");

    }).on("blur", function () {
        $("li.search").removeClass("ativo");
    });

//        $(".thumbnails .row").owlCarousel({
//            autoPlay:3000,
//            items :4,
//        });

    var owl = $(".thumbnails .row");//cria a variavel de inicializacao
    owl.owlCarousel({
        autoPlay: 4000,
        items: 4,
        pagination: false,//se quiser paginacao muda aqui para true
        navigation: false
    });

    $("#btn-news-next").click(function () {
        owl.trigger('owl.next');//mudou aqui
    });
    $("#btn-news-prev").click(function () {
        owl.trigger('owl.prev');
    });

     $("#page-up").on("click",function(event){
       $("body").animate({
         scrollTop:0
     },1000); 
       event.preventDefault();
     
    });

     $("#btn-bars").on("click",function(){
        
        $("header").toggleClass("open-menu");
     });

     $("#menu-mobile-mask,.btn-close").on("click",function(){
       $("header").removeClass("open-menu");    

     });

     $("#btn-search").on("click",function(){
         $('header').toggleClass('open-search');
         $('#input-search-mobile').focus();
     });  
});

$('.estrelas').raty({
    
    starHalf    : 'lib/raty',                                // The name of the half star image.
    starOff     : 'lib/raty/lib/images/star-off.png',                                 // Name of the star image off.
    starOn      : 'lib/raty/lib/images/star-on.png'                                  // Name of the star image on.
    
 });   
