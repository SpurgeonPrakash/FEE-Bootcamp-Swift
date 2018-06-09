$('#search').click(()=>{
    const cityname=$('#cname').val();
   // $('#searched-place').html(cityname);
    function getWeatherDemo() {
        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
              'where woeid in (select woeid from geo.places(1) where text="'+cityname+'")&format=json', function (data) {
            console.log(data);
            const weather_obj=data.query.results.channel;
            const region=weather_obj.location.region;
            const country=weather_obj.location.country;
            const cname=weather_obj.location.city;
            const condition=weather_obj.item.condition.text;
            const ftemp=weather_obj.item.condition.temp;
            const ctemp=changeFahtoCelsius(ftemp);
            const humidity=weather_obj.atmosphere.humidity;
            const wind=weather_obj.wind.speed;
            $('#searched-place').html(cname+','+region+','+country);
            $('#cond').html(condition);
            $('#temp').text(ctemp); 
            $('#humidity').html(humidity+' %');
            $('#wind').html(wind+' km/hr');
            $('#fah').click(()=>{
                $('#temp').text(ftemp); 
            }); 
            $('#cel').click(()=>{
                $('#temp').text(ctemp); 
            }); 
        });
    }
    getWeatherDemo();
});
function changeFahtoCelsius(fahrenheit)
{
    return  Math.round(((fahrenheit-32)*5)/9);
}