const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');
var second = 0; 
var minute = 0;
var hour = 0;
var Id = setInterval(time,1000);
function time() {
    second++;
    if (second === 60) {
        minute += 1;
        second = 0;
    if (minute === 60){
        hour +=1;
        minute = 0;
    };
    if (hour === 24){
        hour = 0;
    };
    };
    
    s.innerText = second;
    m.innerText = minute + ':';
    h.innerText = hour + ':';
}