//wrtie code to display date
var todayDate = moment().format('dddd, MMM do YYYY');
$("#currentDay").html(todayDate);
//wrtie code to have save button work
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").value();
        var time = $(this).parent().attr("id");
        //write code to save things into local storage
localStorage.setItem(time, text);
    })
})


// get items from local storeage

$("hour8a .description").value(localStorage.getItem("hour8a"));
$("hour9a .description").value(localStorage.getItem("hour9a"));
$("hour10a .description").value(localStorage.getItem("hour10a"));
$("hour11a .description").value(localStorage.getItem("hour11a"));
$("hour12p .description").value(localStorage.getItem("hour12p"));
$("hour1p .description").value(localStorage.getItem("hour1p"));
$("hour2p .description").value(localStorage.getItem("hour2p"));
$("hour3p .description").value(localStorage.getItem("hour3p"));
$("hour4p .description").value(localStorage.getItem("hour4p"));
$("hour5p .description").value(localStorage.getItem("hour5p"));
$("hour6p .description").value(localStorage.getItem("hour6p"));
$("hour7p .description").value(localStorage.getItem("hour7p"));
$("hour8p .description").value(localStorage.getItem("hour8p"));
