function submithandler(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log('Input date value', inputdate.value);
    console.log('Type of input date value', typeof inputdate.value);
    //convert the inputdate.value from string to date 
    //using locale of the lead creator (userInfo.getLocale())
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate;
    console.log('Output date value', outputdate.value);
    console.log('Type of Output date value', typeof outputdate.value);
}