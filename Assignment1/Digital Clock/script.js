setInterval(showTime,1000);
function showTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    AM_PM = hour<12 ? 'AM': 'PM';
    hour= hour > 12? hour-12 : hour;
    hour = hour<10?'0'+hour:hour;
    minute = minute < 10? '0'+minute :minute;
    second = second < 10? '0'+second :second;
    let CurrentTime= `${hour}:${minute}:${second}  ${AM_PM}`;
    document.getElementById('clock').innerHTML= CurrentTime;
}

// showTime();