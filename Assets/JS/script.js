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

var Pa3 = document.getElementById("Pa3");
var Pa2 = document.getElementById("Pa2");
var Pa1 = document.getElementById("Pa1");
var Pre = document.getElementById("Pre");
var Fu1 = document.getElementById("Fu1");
var Fu2 = document.getElementById("Fu2");
var Fu3 = document.getElementById("Fu3");
var Fu4 = document.getElementById("Fu4");
var Fu5 = document.getElementById("Fu5");



//input values
var P3 = document.getElementById("past3");
var P2 = document.getElementById("past2");
var P1 = document.getElementById("past1");
var P = document.getElementById("presentInput");
var F1 = document.getElementById("future1");
var F2 = document.getElementById("future2");
var F3 = document.getElementById("future3");
var F4 = document.getElementById("future4");
var F5 = document.getElementById("future5");

//all time values
var timeValue =[Pa3, Pa2, Pa1, Pre, Fu1, Fu2, Fu3, Fu4, Fu5];

//all input values
var inputs = [P3, P2, P1, P, F1, F2, F3, F4, F5];

//all hour stamps in an array
var times = [threeHrPast, twoHrPast, oneHrPast, present, futureOneHr, futureTwoHr, futureThreeHr, futureFourHr, futureFiveHr];

console.log(inputs[0].value);

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

console.log(btnPresentHr[0]);
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
    //placeNotes();
};


///////////////////////////////////////////////////////////////////////////
function saveData(hourAhead, hourNote) {
    var notePresent = hourNote[0].value.trim();
    //console.log(notePresent);
    localStorage.setItem(hourAhead, notePresent);
}
//places all the notes
function placeNotes() {
    for(i=0;i<localStorage.length;i++) {
        var keyName = localStorage.key(i);
        //console.log($(present).text());
        //console.log(localStorage.key(i) + localStorage.getItem(keyName));
        for(j=0;j<times.length;j++){
            if(timeValue[j].innerHTML == keyName){
                inputs[j].value = localStorage.getItem(keyName);
                //console.log(localStorage.getItem(keyName));
            }
        }
    }console.log(timeValue[0]);
}
///////////////////////////////////////////////////////////////////////////

//clears page
function init_notes(){
    placeNotes();
    for(i=0;i<localStorage.length;i++) {
        var keyName = localStorage.key(i);
        //console.log(keyName);
        for(j=0;j<times.length;j++) {
            // if($(times[j]).text() == keyName){
            //     inputs[j].value = localStorage.getItem(keyName);
            //     console.log(localStorage.getItem(keyName));
            // };
            if(timeValue[j].innerHTML != keyName) {
                inputs[j].value = "";
                //console.log(keyName);
                //console.log($(times[j]).text);
            }
            // if(timeValue[i] != keyName){
            //     localStorage.removeItem(localStorage.key(i)) = " ";
            // }
        }
    }
}

///////////////////////////////////////////////////////////////////////////

//eventlisteners
btnPresentHr[0].addEventListener("click", function() {
    saveData(moment().format("hh a"), PresentNote);
});

btnFutureOneHr[0].addEventListener("click", function() {
    saveData(moment().add(1,"h").format("hh a"), futureOneHrNote);
});

btnFutureTwoHr[0].addEventListener("click", function() {
    saveData(moment().add(2,"h").format("hh a"), futureTwoHrNote);
});

btnFutureThreeHr[0].addEventListener("click", function() {
    saveData(moment().add(3,"h").format("hh a"), futureThreeHrNote);
});

btnFutureFourHr[0].addEventListener("click", function() {
    saveData(moment().add(4,"h").format("hh a"), futureFourHrNote);
});

btnFutureFiveHr[0].addEventListener("click", function() {
    saveData(moment().add(5,"h").format("hh a"), futureFiveHrNote);
});

//////////////////////////////////////////////////////////////////////////

//keeps the timestamps updated

setInterval(timeStamps, 1000);
setInterval(placeNotes, 5000);
init_notes();
// make the task have a time hh attached to it if it is equal to the hour timestamp put it there
