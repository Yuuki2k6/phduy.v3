"use strict"

var time_before = new Date("Apr 15, 2024 09:00:00").getTime(),
    time_during = new Date("Apr 15, 2024 23:59:59").getTime();

var x = setInterval(function()
{
    var time_now = new Date().getTime();
    var time_diff_before = time_before - time_now,
        time_diff_during = time_during - time_now;

    var days_before = Math.floor(time_diff_before / (1000 * 60 * 60 * 24));
    var hours_before = Math.floor((time_diff_before % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_before = Math.floor((time_diff_before % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_before = Math.floor((time_diff_before % (1000 * 60)) / 1000);
    // var days_during = Math.floor(time_diff_during / (1000 * 60 * 60 * 24)); -> kinda useless
    var hours_during = Math.floor((time_diff_during % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_during = Math.floor((time_diff_during % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_during = Math.floor((time_diff_during % (1000 * 60)) / 1000);

    var before_string = new String(" Birthday countdown: " + days_before + " ngày, " + hours_before + " giờ " + minutes_before + " phút " + seconds_before + " giây.");
    /* var during_string = new String("Góc hảo tâm: " + hours_during + " giờ " + minutes_during + " phút " + seconds_during) */

    // header_a_logo, header_a_join
    if (time_diff_before >= 0 && time_diff_during >= 0){
        document.getElementById("header_a_logo").innerHTML = before_string;
        /* document.getElementById("header_a_join").innerHTML = "Donate"; */
    }
    if (time_diff_before < 0 && time_diff_during >= 0){
        document.getElementById("header_a_logo").innerHTML = during_string;
        document.getElementById("header_a_join").innerHTML = "Donate nhanhhh!!!";
    }
    if (time_diff_before < 0 && time_diff_during < 0){
        document.getElementById("header_a_logo").innerHTML = "Đợi năm sau bạn nhé.";
        document.getElementById("header_a_join").innerHTML = "Next year:";
    }

}, 1000);
