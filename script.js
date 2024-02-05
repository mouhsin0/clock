// ================ variables ==============
var time = document.getElementById("time"),
    date = document.getElementById("date"),
    color = document.getElementById("color");
setInterval(()=>{
    me();
}, 1000)
function me(){
    // ============= variable time =========
    var getdate  = new Date();
    // form time
    time.innerHTML = (getdate.getHours() < 10 ? `0${getdate.getHours()}`: getdate.getHours()) + ":" + (getdate.getMinutes() < 10 ? `0${getdate.getMinutes()}`: getdate.getMinutes()) + ":" + (getdate.getSeconds() < 10 ? `0${getdate.getSeconds()}`: getdate.getSeconds())
    // for date 
    date.innerHTML = (getdate.getDate() < 10 ? `0${getdate.getDate()}`: getdate.getDate()) + "-" + parseInt(getdate.getMonth()+1) + "-" + getdate.getFullYear();
}
color.addEventListener("change", ()=>{
    document.body.style.background = color.value;
    sessionStorage.setItem("color", color.value)
})
onload = ()=>{
    color.value = sessionStorage.getItem("color")
    document.body.style.background = sessionStorage.getItem("color")
}
