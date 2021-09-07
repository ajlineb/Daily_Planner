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

//time values
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

//gets the date  places at the top of the page
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("dddd, MMMM Do");
var dayClean = moment().format("HH");
console.log(dayClean);

//all time values
var timeValue =[Pa3, Pa2, Pa1, Pre, Fu1, Fu2, Fu3, Fu4, Fu5];

//all input values
var inputs = [P3, P2, P1, P, F1, F2, F3, F4, F5];

//all hour stamps in an array
var times = [threeHrPast, twoHrPast, oneHrPast, present, futureOneHr, futureTwoHr, futureThreeHr, futureFourHr, futureFiveHr];

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

///////////////////////////////////////////////////////////////////////////

// these three sections of code grey out the past buttons and get rid of hover effects
btnThreePastHr[0].style.backgroundColor = "grey";
btnThreePastHr[0].disabled = true;
btnThreePastHr.hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("color", "white");
});

btnTwoPastHr[0].style.backgroundColor = "grey";
btnTwoPastHr[0].disabled = true;
btnTwoPastHr.hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("color", "white");
});

btnOnePastHr[0].style.backgroundColor = "grey";
btnOnePastHr[0].disabled = true;
btnOnePastHr.hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("color", "white");
});

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
};


///////////////////////////////////////////////////////////////////////////

//saves the info in the text box to the localStorage after clicking the save button
function saveData(hourAhead, hourNote) {
    var notePresent = hourNote[0].value.trim();
    //console.log(notePresent);
    localStorage.setItem(hourAhead, notePresent);
}

//places all the notes
function placeNotes() {
    //used to clear local storage from the previous day
    if(dayClean === "00") {
        localStorage.clear();
    }
    for(i = 0; i<inputs.length; i++) {
        var timeEl = timeValue[i].innerHTML;
        var inputEl = inputs[i];
        inputEl.value = '';
        //console.log(timeEl + " time");
        for(j=0; j<localStorage.length; j++) {
            if(timeEl === localStorage.key(j)) {
                var keyName = localStorage.key(j);
                //console.log(timeEl + " " + inputEl + " " + keyName);
                inputEl.value = localStorage.getItem(keyName);
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////

//takes notes from the localStorage and places them upon loading the page
function init_notes(){
    for(i = 0; i<inputs.length; i++) {
        var timeEl = timeValue[i].innerHTML;
        var inputEl = inputs[i];
        //console.log(timeEl + " time");
        for(j=0; j<localStorage.length; j++) {
            if(timeEl === localStorage.key(j)) {
                var keyName = localStorage.key(j);
                //console.log(timeEl + " " + inputEl + " " + keyName);
                inputEl.value = localStorage.getItem(keyName);
            }
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

setTimeout(init_notes, 550); //need this to wait so that the timestamps can be entered and then activate
setInterval(timeStamps, 500); //updates the timestamps
setInterval(placeNotes, 10000); //places the notes every 10 seconds, unless the user saves and empty box it will put the last saved value in the box
