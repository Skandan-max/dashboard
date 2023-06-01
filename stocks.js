const stocks=()=>{
    let s1=document.getElementsByClassName("s1")[0];
 
fetch(`https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=chrvf09r01ql90jcl2a0chrvf09r01ql90jcl2ag`).then(response=>{
    fetch(``).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
   s1.innerText= data.actual;


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "* Cannot Find Area / City";
    
})


return false;
})

};
