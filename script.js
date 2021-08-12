var appointmentArray = []
var textAreas = document.querySelectorAll(".hourPLan")
var dateEl = document.querySelector("#currentDay")
var day = moment().format("MMM Do YY");
var hour = moment().hour()
var schedule = localStorage.getItem("appointment")
const saveBtn = document.querySelectorAll(".saveBtn")
const rows = document.getElementsByClassName("container")
let timeLabel = parseInt(moment().format('Hour'));
dateEl.textContent = day
console.log(saveBtn)

function renderTextArea() {
    for (var i = 0; i < textArea.length; i++)
        var textArea = schedule[i];
}

function init() {
    var schedule = JSON.parse(localStorage.getItem("appointments"));
    if (schedule !== null) {
        for (var i = 0; i < schedule.length; i++) {
            var time = schedule[i].time
            document.getElementById(time).value = schedule[i].title
        }
    }
    for (var i = 0; i < textAreas.length; i++) {
        var id = textAreas[i].getAttribute("id");
        if (id < hour) {
            textAreas[i].className += " past"
        }
        else if (id > hour) {
            textAreas[i].className += " future"
        }
        else {
            textAreas[i].className += " present"
        }
    }
}


for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', (e) => {
        console.log(e.target.previousElementSibling.value)


        var appointment = {
            time: e.target.previousElementSibling.getAttribute("id"),
            title: e.target.previousElementSibling.value.trim()
        }
        appointmentArray.push(appointment)
        localStorage.setItem("appointments", JSON.stringify(appointmentArray))
        renderLastRegistered();
    })
}



init()