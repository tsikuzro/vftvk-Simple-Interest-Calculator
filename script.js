function compute()
{
    var princ = document.getElementById("principal").value;

    if (princ.value =="" || princ.value <="0"){
        alert("Enter a positive number");
        princ.focus();
        return false;
    }else{
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerText="If you deposit "+ principal + ",\n"+ "at an interest rate of "+ rate +"%.\n"+ "You will receive an amount of "+ interest +",\n"+ "in the year "+ year;
    }
    return true; 
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; 
}
