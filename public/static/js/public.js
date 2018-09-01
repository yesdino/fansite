$(document).ready(function () {
    var type = getQueryVariable("type");
    console.log("type :"+type);

    
    if( type=="official" ){
        $(".official").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official").each(function () {
            $(this).hide();
        });
    }
    else if( type=="music_stage" ){
        $(".music_stage").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage").each(function () {
            $(this).hide();
        });
    }
    else if( type=="Radio" ){
        $(".Radio").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio").each(function () {
            $(this).hide();
        });
    }
    else if( type=="group_arts" ){
        $(".group_arts").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts").each(function () {
            $(this).hide();
        });
    }
    else if( type=="tv_station" ){
        $(".tv_station").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station").each(function () {
            $(this).hide();
        });
    }
    else if( type=="news" ){
        $(".news").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news").each(function () {
            $(this).hide();
        });
    }
    else if( type=="pub_performance" ){
        $(".pub_performance").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance").each(function () {
            $(this).hide();
        });
    }
    else if( type=="cf" ){
        $(".cf,.magazine").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".cf,.magazine").each(function () {
            $(this).hide();
        });
    }
    else if( type=="VLOG" ){
        $(".VLOG").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".VLOG").each(function () {
            $(this).hide();
        });
    }
    else if( type=="concert" ){
        $(".concert,.FM").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert,.FM").each(function () {
            $(this).hide();
        });
    }
    else if( type=="live" ){
        $(".live").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".live").each(function () {
            $(this).hide();
        });
    }
    else if( type=="teleplay" ){
        $(".teleplay").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay").each(function () {
            $(this).hide();
        });
    }
    else if( type=="other" ){
        $(".other").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other").each(function () {
            $(this).hide();
        });
    }


    //--------------------------------------------------------
    $("#All").click(function (){
        $("#TABLE table tbody tr").each(function () {
            $(this).show();
        });
    })

    $("#Official").click(function (){
        $(".official").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official").each(function () {
            $(this).hide();
        });
    })

    $("#Music_stage").click(function (){
        $(".music_stage").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage").each(function () {
            $(this).hide();
        });
    })

    $("#radio").click(function (){
        $(".Radio").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio").each(function () {
            $(this).hide();
        });
    })
    $("#Group_arts").click(function (){
        $(".group_arts").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts").each(function () {
            $(this).hide();
        });
    })
    $("#Tv_station").click(function (){
        $(".tv_station").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station").each(function () {
            $(this).hide();
        });
    })
    $("#News").click(function (){
        $(".news").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news").each(function () {
            $(this).hide();
        });
    })
    $("#Pub_performance").click(function (){
        $(".pub_performance").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance").each(function () {
            $(this).hide();
        });
    })
    $("#Cf").click(function (){
        $(".cf,.magazine").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".cf,.magazine").each(function () {
            $(this).hide();
        });
    })
    $("#vLOG").click(function (){
        $(".VLOG").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".VLOG").each(function () {
            $(this).hide();
        });
    })
    $("#Concert").click(function (){
        $(".concert,.FM").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert,.FM").each(function () {
            $(this).hide();
        });
    })
    $("#Live").click(function (){
        $(".live").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".live").each(function () {
            $(this).hide();
        });
    })
    $("#Teleplay").click(function (){
        $(".teleplay").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay").each(function () {
            $(this).hide();
        });
    })
    $("#Other").click(function (){
        $(".other").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other").each(function () {
            $(this).hide();
        });
    })
});


function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){
                   return pair[1];
                }
       }
       return(false);
}