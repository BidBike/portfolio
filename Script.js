function clickCouth(){
    let count = 0;
    let btn = document.getElementById("btn");
    let disp = document.getElementById("display");
         
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
    }
}

function runTime(){
    let timeShow = document.getElementById("timeshow");
    const data = new Date(1666632563517);

    console.log(data);

    timeShow.innerHTML = data;

    document.getElementById("timeshow").innerHTML = text;
}