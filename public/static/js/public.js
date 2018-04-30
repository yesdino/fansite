$(document).ready(function () {
    //$("#2012").show();
    $("#TABLE table tbody tr").not(".16").each(function () {
        $(this).hide();
    });

    //-------以上是页面初始执行的内容-----------
    $("#nav_12_all").click(function () {
        $(".12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".12").each(function () {
            $(this).hide();
        });

    })
    $("#nav_12_official").click(function () {
        $(".official.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_dage").click(function () {
        $(".music_stage.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_Radio").click(function () {
        $(".Radio.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_group_arts").click(function () {
        $(".group_arts.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_tv_station").click(function () {
        $(".tv_station.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_pub_performance").click(function () {
        $(".pub_performance.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance.12").each(function () {
            $(this).hide();
        });
    })
    $("#nav_12_news").click(function () {
        $(".news.12").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news.12").each(function () {
            $(this).hide();
        });
    })
    //---------- 2013 ----------
    $("#nav_13_all").click(function () {
        $(".13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_official").click(function () {
        $(".official.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_dage").click(function () {
        $(".music_stage.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_Radio").click(function () {
        $(".Radio.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_group_arts").click(function () {
        $(".group_arts.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_tv_station").click(function () {
        $(".tv_station.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_news").click(function () {
        $(".news.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_VLOG").click(function () {
        $(".VLOG.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".VLOG.13").each(function () {
            $(this).hide();
        });
    })

    $("#nav_13_pub_performance").click(function () {
        $(".pub_performance.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_magazine_cf").click(function () {
        $(".magazine.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".magazine.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_FM").click(function () {
        $(".FM.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".FM.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_concert_FM").click(function () { //演唱会
        $(".concert.13,.FM.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert.13,.FM.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_teleplay").click(function () { //电视剧
        $(".teleplay.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay.13").each(function () {
            $(this).hide();
        });
    })
    $("#nav_13_other").click(function () {
        $(".other.13").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other.13").each(function () {
            $(this).hide();
        });
    })



    //---------------- 2014 --------------
    $("#nav_14_all").click(function () {
        $(".14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_official").click(function () {
        $(".official.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_dage").click(function () {
        $(".music_stage.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_Radio").click(function () {
        $(".Radio.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_group_arts").click(function () {
        $(".group_arts.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_tv_station").click(function () {
        $(".tv_station.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_pub_performance").click(function () {
        $(".pub_performance.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_news").click(function () {
        $(".news.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_magazine_cf").click(function () {
        $(".magazine.14,.cf.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".magazine.14,.cf.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_concert_FM").click(function () { //演唱会 & FM
        $(".concert.14,.FM.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert.14,.FM.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_live").click(function () { // 直播
        $(".live.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".live.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_teleplay").click(function () { //电视剧
        $(".teleplay.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay.14").each(function () {
            $(this).hide();
        });
    })
    $("#nav_14_other").click(function () {
        $(".other.14").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other.14").each(function () {
            $(this).hide();
        });
    })
    //---------------- 2015 --------------


    //---------------- 2016 --------------
    $("#nav_16_all").click(function () {
        $(".16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_official").click(function () {
        $(".official.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_dage").click(function () {
        $(".music_stage.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_Radio").click(function () {
        $(".Radio.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_group_arts").click(function () { //团综
        $(".group_arts.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_tv_station").click(function () { //放送
        $(".tv_station.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_news").click(function () { //新闻
        $(".news.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_VLOG").click(function () { //VLOG
        $(".VLOG.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".VLOG.16").each(function () {
            $(this).hide();
        });
    })

    $("#nav_16_pub_performance").click(function () { //公演 & FM 
        $(".pub_performance.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_magazine_cf").click(function () { //画报 & cf
        $(".magazine.16,.cf.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".magazine.16,.cf.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_concert_FM").click(function () { //演唱会
        $(".concert.16,.FM.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert.16,.FM.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_live").click(function () { //直播
        $(".live.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".live.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_teleplay").click(function () { //电视剧
        $(".teleplay.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay.16").each(function () {
            $(this).hide();
        });
    })
    $("#nav_16_other").click(function () { //其他
        $(".other.16").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other.16").each(function () {
            $(this).hide();
        });
    })


    //---------------- 2017 --------------
    $("#nav_17_all").click(function () {
        $(".17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_official").click(function () {
        $(".official.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".official.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_dage").click(function () {
        $(".music_stage.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".music_stage.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_Radio").click(function () {
        $(".Radio.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".Radio.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_group_arts").click(function () { //团综
        $(".group_arts.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".group_arts.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_tv_station").click(function () { //放送
        $(".tv_station.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".tv_station.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_news").click(function () { //新闻
        $(".news.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".news.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_VLOG").click(function () { //VLOG
        $(".VLOG.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".VLOG.17").each(function () {
            $(this).hide();
        });
    })

    $("#nav_17_pub_performance").click(function () { //公演 & FM 
        $(".pub_performance.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".pub_performance.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_magazine_cf").click(function () { //画报 & cf
        $(".magazine.17,.cf.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".magazine.17,.cf.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_concert_FM").click(function () { //演唱会
        $(".concert.17,.FM.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".concert.17,.FM.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_live").click(function () { //直播
        $(".live.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".live.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_teleplay").click(function () { //电视剧
        $(".teleplay.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".teleplay.17").each(function () {
            $(this).hide();
        });
    })
    $("#nav_17_other").click(function () { //其他
        $(".other.17").each(function () {
            $(this).show();
        });
        $("#TABLE table tbody tr").not(".other.17").each(function () {
            $(this).hide();
        });
    })

    //---------- month select ------------
    //            var mon6_top = $("#month6").offset().top; // var mon7_top = $("#month7").offset().top; // $("#MON6").click(function() { // $("html, body").animate({ // scrollTop: mon6_top // }, { // duration: 500, // easing: "swing" // }); // //return false; // }); // $("#MON7").click(function() { // $("html, body").animate({ // scrollTop: mon7_top // }, { // duration: 500, // easing: "swing" // }); // //return false; // });
});
