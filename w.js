const apiKey="a710841cbf01aa631e5a8dd710b2db82";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather( city){
    const response= await fetch(apiUrl +city +`&appid= ${apiKey}`);

if(response.status == 404){
    document.querySelector(".error").Style.display = "block";
    document.querySelector(".weather").Style.display = "none";
}else{
   var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round( data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main =="Clouds") {
    weatherIcon.src ="images/clouds.png";
}
else if(data.weather[0].main =="Clear" ) {
    weatherIcon.src ="images/clear.png";
}
else if(data.weather[0].main =="Rain" ) {
    weatherIcon.src ="images/rain.png";
}
else if(data.weather[0].main =="Drizzle" ) {
    weatherIcon.src ="images/drizzle.png";
}
else if(data.weather[0].main =="Mist" ) {
    weatherIcon.src ="images/mist.png";
}



document.querySelector(".weather").Style.display = "block";
document.querySelector(".error").Style.display = "block";
}




  
  
  /*  var data = await response.json();

   

    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round( data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main =="Clouds") {
    weatherIcon.src ="images/clouds.png";
}
else if(data.weather[0].main =="Clear" ) {
    weatherIcon.src ="images/clear.png";
}
else if(data.weather[0].main =="Rain" ) {
    weatherIcon.src ="images/rain.png";
}
else if(data.weather[0].main =="Drizzle" ) {
    weatherIcon.src ="images/drizzle.png";
}
else if(data.weather[0].main =="Mist" ) {
    weatherIcon.src ="images/mist.png";
}
document.querySelector(".weather").Style.display = "block";*/


}

searchBtn.addEventListener("click",()=>
{ 
    checkWeather( searchBox.value);

})
