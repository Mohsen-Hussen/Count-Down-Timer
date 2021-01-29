let titleEvent = document.getElementById("title_event").value;
let titleDate = document.getElementById("title_date").value;
let titleResult = document.getElementById("title_result");
if (titleEvent == '' || titleDate == '') {
    alert("Please insert the event ( Title & Date )");
} else {
    console.log(titleEvent);
    console.log(typeof(titleEvent));
    console.log(titleDate);
    console.log(typeof(titleEvent));
    titleResult.innerHTML = `the event ${titleEvent} will be start at ${titleDate}`;
}
console.log(Date.parse(titleDate));