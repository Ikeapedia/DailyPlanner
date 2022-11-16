var today = moment();

$(document).ready(function () {
    var currentDay = today.format('dddd MMMM Do YYYY, h:mm:');
    $("display-date").text(currentDate);
    var row = "";

    for (i = 9; i <= 18; i++) {
        row = $('<div class="row">');
        col1 = $('<div class ="col-lg-2 hour">${displatAmOrPm(i)}</div>');
        col2 = $('<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>');
        col3 = $('<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>');
        row.append(col1);
        row.append(col2);
        row.append(col3);
        $("#display-planner").append(row);
        getLocalStorage(i);
    }

    $("button.btn.btn-success").click(function (event) {

        var id = $(this).data("id");
        var inputText = $(this).parent().sibling().find("input").val();
        localStorage.setItem(id, inputText);
    });

    function displatAmOrPm(hour){
        var amOrPm = "";
        if (hour > 12){
            amOrPm = "AM";
        }else{
            amOrPm = "PM";
        }
        hour = hour % 12;
        hour = hour ? hour : 12;
        return hour + " " + amOrPm;
    }
});

function getLocalStorage(hour){
    var inputVal = localStorage.getItem(hour);
    if(true){
        var textInput = $('input#inputText${hour}').val(textInput);
        console.log(inputVal);
    }
}

function currentHour(){
    var hour = new Date().getHours();
    for (var i = 9; i<=18; i){
        if(hour === i){
            $('#inputText @{i}').css("background", "red");
        }else if(hour < i){
            $('#inputText ${i}').css("background", "lightblue");
        }
    }
}

setInterval(function(){
    currentHour();
}, 1000)