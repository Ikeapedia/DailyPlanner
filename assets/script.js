var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var saveButton = document.querySelector('button');

saveButton.addEventListener('click', storedEl);
storedEl = localStorage.getItem("storedEl");

function storedEl(){
    var inputEl = document.getElementById('9a').value;
    console.log(inputEl);
    localStorage.setItem("storedEl", inputEl);
    document.getElementById('9a').innerHTML = inputEl;

    return inputEl;
}

function get(){
    localStorage.getItem("storedEl");
    document.getElementById("9a").innerHTML = storedEl;

    return inputEl;
}


if (storedEl !== null) $('#inputStoredEl').val(storedEl);

window.onbeforeunload = function(){
    localStorage.setItem("storedEl", $('#inputStoredEl').val());
}