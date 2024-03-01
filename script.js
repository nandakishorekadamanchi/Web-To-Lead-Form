function submithandler(){
    let outputdate = document.querySelector('.outputdate')
    let inputdate = document.querySelector('.inputdate')
    console.log('inputdate.value', inputdate.value) //string -→> date (en_IN)
    //typeof inputdate.value is 'String'
    //system.debug(userInfo.getlocale()); en_IN

    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate;
}


function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500); 