var appointmentArray = []
var textArea = document.querySelector("#hourPLan")
var dateEl = document.querySelector("#currentDay")
var day = moment().format("MMM Do YY");
var schedule = localStorage.getItem("appointment")
const saveBtn = document.querySelectorAll(".saveBtn")
dateEl.textContent = day
console.log(saveBtn)

//attempt1(Storage.setItem(textArea, "appointments");
//attempt2 function populateStorage() {
//    localStorage.setItem("appointments")
//}
//attempt3
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