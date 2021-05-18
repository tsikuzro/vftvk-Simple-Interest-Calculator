function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    interest = (p * years * rate)/100;
    var year = new Date().getFullYear() + parseInt(years);

    if (p == "" || p <="0"){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }else{
        span = 'If you deposit <mark>' + p + '</mark>, <br/>at an interest rate of <mark>' + rate + '%.</mark> <br/>You will recieve an amount of <mark>'+ interest + '</mark>, <br/>in the year <mark>'+ year +'</mark>'; 
     	document.getElementById("result").innerHTML=span;
    }
    return true; 
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; 
}