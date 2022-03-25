// asng-a
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    //console.log(data);
    let res = data.filter((element)=>element.region==="Asia");
    console.log(res);
}
//asnd-b
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    //console.log(data);
    let res = data.filter((element)=>element.region<200000);
    console.log(res);
}
//asng-d
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    let res = data.filter((element)=>element.region);
    let final=res.reduce((acc,cv)=> acc+cv .population,0)
    console.log(final);
}

// asng-e
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    let res = data.filter((element)=>element.currency<="US Dollars");
    console.log(res);
}
