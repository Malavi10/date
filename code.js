function SFY(){
    const d = new Date();
    d.setFullYear(2020);
    document.getElementById('sfy').innerHTML = d;
}

function SM(){
    const d = new Date();
    d.setMonth(1);
    document.getElementById('sm').innerHTML = d;
}

function SD(){
    const d = new Date();
    d.setDate(15);
    document.getElementById('sd').innerHTML = d;
}

function SH(){
    const d = new Date();
    d.setHours(22);
    document.getElementById('sh').innerHTML = d;
}

function SMin(){
    const d = new Date();
    d.setMinutes(50);
    document.getElementById('smin').innerHTML = d;
}

function SS(){
    const d = new Date();
    d.setSeconds(25);
    document.getElementById('ss').innerHTML = d;
}

function SMS(){
    const d = new Date();
    d.setMilliseconds(942);
    document.getElementById('sms').innerHTML = d;
}