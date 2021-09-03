//for all the hour timestamps
var threeHrPast = $(".time-negative-3");
var twoHrPast = $(".time-negative-2");
var oneHrPast = $(".time-negative-1");
var present = $(".time-current_Time");
var futureOneHr = $(".time-1-hour");
var futureTwoHr = $(".time-2-hour");
var futureThreeHr = $(".time-3-hour");
var futureFourHr = $(".time-4-hour");
var futureFiveHr = $(".time-5-hour");

console.log(futureFourHr);

//for all the hour notes
var threeHrPastNote = $(".noteNegative-3");
var twoHrPastNote = $(".noteNegative-2");
var oneHrPastNote = $(".noteNegative-1");
var PresentNote = $(".present");
var futureOneHrNote = $(".1-hourNote");
var futureTwoHrNote = $(".2-hourNote");
var futureThreeHrNote = $(".3-hourNote");
var futureFourHrNote = $(".4-hourNote");
var futureFiveHrNote = $(".5-hourNote");

console.log(PresentNote);

//for all buttons
var btnThreePastHr = $(".btnNegative-3");
var btnTwoPastHr = $(".btnNegative-2");
var btnOnePastHr = $(".btnNegative-1");
var btnPresentHr = $(".present-btn");
var btnFutureOneHr = $(".1-hourBtn");
var btnFutureTwoHr = $(".2-hourBtn");
var btnFutureThreeHr = $(".3-hourBtn");
var btnFutureFourHr = $(".4-hourBtn");
var btnFutureFiveHr = $(".5-hourBtn");

console.log(btnOnePastHr);
///////////////////////////////////////////////////////////////////////////

//sets the times on the left
function timeStamps(){
    threeHrPast.text(moment().subtract(3,"h").format("hh a"));
    twoHrPast.text(moment().subtract(2,"h").format("hh a"));
    oneHrPast.text(moment().subtract(1,"h").format("hh a"));
    present.text(moment().format("hh a"));
    futureOneHr.text(moment().add(1,"h").format("hh a"));
    futureTwoHr.text(moment().add(2,"h").format("hh a"));
    futureThreeHr.text(moment().add(3,"h").format("hh a"));
    futureFourHr.text(moment().add(4,"h").format("hh a"));
    futureFiveHr.text(moment().add(5,"h").format("hh a"));
}

//keeps the timestamps updated
setInterval(timeStamps, 1000);