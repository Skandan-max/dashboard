let apikey="6478f57dab96414386f003c2057105fe"

const news1=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=technology&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};

const news2=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=sports&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})

return false;
};



const news3=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=business&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    // tit1.innerText=`<a href=${data.articles[0].url}>${data.articles[0].title}</a>`
    tit1.setAttribute("href",data.articles[0].url);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};

const news4=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=science&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};