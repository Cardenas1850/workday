//wrtie code to display date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//wrtie code to have save button work
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //write code to save things into local storage
localStorage.setItem(time, text);
    })
//set past, present, future

function trackTime() {
    var timeOf = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeOf) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === timeOf) {
            $(this).removeClass("past")
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}

// get items from local storeage
$("hour2a .description").val(localStorage.getItem("hour2a"));
$("hour8a .description").val(localStorage.getItem("hour8a"));
$("hour9a .description").val(localStorage.getItem("hour9a"));
$("hour10a .description").val(localStorage.getItem("hour10a"));
$("hour11a .description").val(localStorage.getItem("hour11a"));
$("hour12p .description").val(localStorage.getItem("hour12p"));
$("hour13p .description").val(localStorage.getItem("hour1p"));
$("hour14p .description").val(localStorage.getItem("hour2p"));
$("hour15p .description").val(localStorage.getItem("hour3p"));
$("hour16p .description").val(localStorage.getItem("hour4p"));
$("hour17p .description").val(localStorage.getItem("hour5p"));
$("hour18p .description").val(localStorage.getItem("hour6p"));
$("hour19p .description").val(localStorage.getItem("hour7p"));
$("hour20p .description").val(localStorage.getItem("hour8p"));

trackTime();

})
