const weatherch=()=>{
    let temp=document.getElementsByClassName("temp")[0];
    let loc=document.getElementsByClassName("loc")[0];
    let wind=document.getElementsByClassName("wind")[0];
    let icon=document.getElementsByClassName("icon")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://api.weatherapi.com/v1/current.json?key=a5734f426b354ff9aab61937230203&q=chennai&aqi=no`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    temp.innerHTML =  `<i class="wi wi-thermometer"></i> Temperature: ${data.current.temp_c} deg C`
    wind.innerHTML =  `<i class="wi wi-strong-wind"></i> humidity: ${data.current.humidity} %`
    icon.innerHTML = `<img src="${data.current.condition.icon}" width=80px>`
    loc.innerHTML = data.location.name;


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "* Cannot Find Area / City";
    
})


// return false;
};

weatherch();

let b3=document.getElementsByClassName("b3")[0];

b3.addEventListener('click', () => {
    // 👇️ hide button
    btn.style.display = 'none';
});


const stocks=()=>{
    let s1=document.getElementsByClassName("s1")[0];
 


fetch(`https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=chrvf09r01ql90jcl2a0chrvf09r01ql90jcl2ag`).then(response=>{
    fetch(``).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
   s1.innerText= data.c;


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "* Cannot Find Area / City";
    
})


// return false;
})

};