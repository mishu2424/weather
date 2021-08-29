const loggedin=()=>{
    console.log('click')
    const inputId=document.getElementById('inputId')
    const emailValue=inputId.value;
    inputId.value=''
    console.log(emailValue)
    const inputId2=document.getElementById('inputId2')
    const passValue=inputId2.value;
    inputId2.value=''
    if(emailValue=='apurbomishu24@gmail.com'&&passValue=='gitadey01704890'){
        console.log('clicked')
        window.location.href='https://www.google.com/'
    } 

}