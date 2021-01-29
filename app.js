const getTimeRemaining = () => {
    let titleEventOne = document.getElementById("title_event").value;
    let titleDateOne = document.getElementById("title_date").value;
    let titleResultOne = document.getElementById("title_result");
    let total = Date.parse(titleDateOne) - Date.parse(new Date());
    let seconds = Math.floor( (total/1000) % 60 );
    let minutes = Math.floor( (total/1000/60) % 60 );
    let hours = Math.floor( (total/(1000*60*60)) % 24 );
    let days = Math.floor( total/(1000*60*60*24) );
    console.log(total);
    titleResultOne.innerHTML = `The Event : ${titleEventOne} Will start after ${days} Days , ${hours} Hours , ${minutes} Minutes , ${seconds} Seconds`;
}