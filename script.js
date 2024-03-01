function submithandler(){
    let outputdate = document.querySelector('.outputdate')
    let inputdate = document.querySelector('.inputdate')
    console.log('inputdate.value', inputdate.value) //string -→> date (en_IN)
    //typeof inputdate.value is 'String'
    //system.debug(userInfo.getlocale()); en_IN

    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate;
}