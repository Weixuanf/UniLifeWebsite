/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function() {
    "use strict"; // Start of use strict
    $('#topnav').affix({
         offset: {
            top: 10
         }
    });
    //先加载好默认的rank
    $('#mood-rank-div').load('stressful.html');
    $('#act-rank-div').load('go_to_the_gym.html');
    $('#mood-status-div').load('stressful_post.html');
    $('#act-status-div').load('go_to_the_gym_post.html');


    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".more-mood-keywords").children("a").click(function(){
        $('#mood-rank-div').load($(this).attr("id")+'.html');
        $('#mood-status-div').load($(this).attr("id")+'_post.html');
        $(".more-mood-keywords").children("a").removeClass("activeMoodKeyword"); //先去除所有的activeclass
        $(this).addClass("activeMoodKeyword");
    });
    $(".more-act-keywords").children("a").click(function(){
        $('#act-rank-div').load($(this).attr("id")+'.html');
        $('#act-status-div').load($(this).attr("id")+'_post.html');
        $(".more-act-keywords").children("a").removeClass("activeActKeyword"); //先去除所有的activeclass
        $(this).addClass("activeActKeyword");
    });

    var gender = document.getElementById("gender");
    var myPieChart = new Chart(gender,{
        type: 'doughnut',
        data: {
            labels: [
                "女",
                "男"
            ],
            datasets: [
                {
                    data: [300, 200],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
        },
    });



})(jQuery) // End of use strict
