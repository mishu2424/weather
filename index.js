const weatherResult=()=>{
    const inputField=document.getElementById('input-field')
    const inputValue=inputField.value;
    inputField.value=''
    const key='7472018eea5f16dd3c7ab484f262d2b1'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`)
    .then(res=>res.json())
    .then(data=>showTemp(data))
}
const showTemp=datas=>{
    console.log(datas)
    console.log(datas.main.temp)
    const temp=(datas.main.temp)-273.15
    console.log(datas.name)
    const parent=document.getElementById('parentSec')
    parent.textContent=''
    if(temp>20&&temp<30){
        const div=document.createElement('div')
        div.style.textAlign='center'
        div.style.color='white'
        div.innerHTML=`
        <h1>${datas.name}</h1>
        <h1>${temp.toFixed(2)}&deg;c</h1>
        <h2>${datas.weather[0].description}</h2>
        <i class="fas fa-cloud-moon-rain"></i>
        `
        parent.appendChild(div)
    }
    if(temp<20){
        const div=document.createElement('div')
        div.style.textAlign='center'
        div.style.color='white'
        div.innerHTML=`
        <h1>${datas.name}</h1>
        <h1>${temp.toFixed(2)}&deg;c</h1>
        <h2>${datas.weather[0].description}</h2>
        <i class="fas fa-cloud-rain"></i>
        `
        parent.appendChild(div)
    }
    if(temp>30){
        const div=document.createElement('div')
        div.style.textAlign='center'
        div.style.color='white'
        div.innerHTML=`
        <h1>${datas.name}</h1>
        <h1>${temp.toFixed(2)}&deg;c</h1>
        <h2>${datas.weather[0].description}</h2>
        <i class="fas fa-cloud-sun"></i>
        `
        parent.appendChild(div)
    }
    /* const div=document.createElement('div')
    div.style.textAlign='center'
    div.style.color='white'
    div.innerHTML=`
    <h1>${datas.name}</h1>
    <h1>${temp.toFixed(2)}&deg;c</h1>
    <h2>${datas.weather[0].description}</h2>
    ` */
    /* if(temp>20){
        <i class="fas fa-cloud-moon-rain"></i>
    } */
  /*   document.getElementById('cityName').innerText=`${datas.name}`
    document.getElementById('cityTemp').innerText=`${temp}`
    document.getElementById('cityCondition').innerText=`${datas.weather[0].description}` */
    // parent.appendChild(div)
   /*  if(temp<20){
        <img style="width:20px" src="https://cdn.dribbble.com/users/90293/screenshots/4632175/rainy800.gif">
    } */
}