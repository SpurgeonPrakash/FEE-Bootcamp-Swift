$('#search').click(()=>{
    const cityname=$('#cname').val();
    console.log('button clicked');
    function getWeatherDemo() {
        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
              'where woeid in (select woeid from geo.places(1) where text="'+cityname+'")&format=json', function (data) {
            console.log(data);
            var c=1,flag=0;
            const weather_obj=data.query.results.channel;
            const region=weather_obj.location.region;
            const country=weather_obj.location.country;
            const cname=weather_obj.location.city;
            const condition=weather_obj.item.condition.text;
            changeimg(condition,'#cond-img');
            function changeimg(condition,id)
            {
            if(condition=="Cloudy")
              $(id).attr("src","images/cloudy.png");
            else if(condition=="Thunderstorms")
              $(id).attr("src","images/thunderstorms.png");
            else if(condition=="Scattered Thunderstorms")
              $(id).attr("src","images/rain_s_cloudy.png");
            else if(condition=="Partly Cloudy" || condition=="Mostly Cloudy")
              $(id).attr("src","images/partly_cloudy.png");
            else if(condition=="Showers")
              $(id).attr("src","images/rain_light.png");
            else if(condition=="Sunny" || condition=="Clear")
              $(id).attr("src","images/sunny.png");
            else if(condition=="Haze" || condition=="Fog")
              $(id).attr("src","images/fog.png");
            else if(condition=="Rain")
              $(id).attr("src","images/rain.png");
            else if( condition=="Breezy")
              $(id).attr("src","images/breezy.png");
            }
            forecast();
            function forecast()
            {
            for(var i=0;i<=7;i++)
            {
              c=i+1;
              var day=weather_obj.item.forecast[i].day;
              var fcond=weather_obj.item.forecast[i].text;
              var high=weather_obj.item.forecast[i].high;
              var low=weather_obj.item.forecast[i].low;
              $('#fday'+c).html(day);
              changeimg(fcond,'#fimg'+c);
              $('#high'+c).html(changeFahtoCelsius(high));
              $('#low'+c).html(changeFahtoCelsius(low));
            }
            }
            const ftemp=weather_obj.item.condition.temp;
            const ctemp=changeFahtoCelsius(ftemp);
            const humidity=weather_obj.atmosphere.humidity;
            const wind=weather_obj.wind.speed;
            var date=moment().format('dddd,h:00 A');
            $('#day').html(date);
            $('#searched-place').html(cname+','+region+','+country);
            $('#cond').html(condition);
            $('#temp').text(ctemp);
            $('#humidity').html(humidity+' %');
            $('#wind').html(" "+wind+' km/hr');
            function changeforecast(id)
            {
              var day=weather_obj.item.forecast[id].day;
              if(day=="Mon")
                day="Monday";
              else if(day=="Tue")
                day="Tuesday";
              else if(day=="Wed")
                day="Wednesday";
              else if(day=="Thu")
                day="Thursday";
              else if(day=="Fri")
                day="Friday";
              else if(day=="Sat")
                day="Saturday";
              else if(day=="Sun")
                day="Sunday";
              var high=weather_obj.item.forecast[id].high;
              var fcond=weather_obj.item.forecast[id].text;
              $('#day').html(day);
              $('#cond').html(fcond);
              changeimg(fcond,'#cond-img');
              if(flag==0)
                $('#temp').text(changeFahtoCelsius(high));
              else
                $('#temp').text(high);
            }
            $('#fah').click(()=>{
                $('#temp').text(ftemp);
                flag=1;
                for(var i=0;i<=7;i++)
                {
                  c=i+1;
                  var high=weather_obj.item.forecast[i].high;
                  var low=weather_obj.item.forecast[i].low;
                  $('#high'+c).html(high);
                  $('#low'+c).html(low);
                }
            });
            $('#cel').click(()=>{
                flag=0
                $('#temp').text(ctemp);
                forecast();
            });
            $('#grid1').click(()=>{
                changeforecast(0);
            });
            $('#grid2').click(()=>{
                changeforecast(1);
            });
            $('#grid3').click(()=>{
                changeforecast(2);
            });
            $('#grid4').click(()=>{
                changeforecast(3);
            });
            $('#grid5').click(()=>{
                changeforecast(4);
            });
            $('#grid6').click(()=>{
                changeforecast(5);
            });
            $('#grid7').click(()=>{
                changeforecast(6);
            });
            $('#grid8').click(()=>{
                changeforecast(7);
            });
            plotChart();
        });
        const plotChart = () => {
          Highcharts.chart('chart', {
              chart: {
                  type: 'areaspline',
                  width:600,
                  height:150,
              },
              title: {
                  text: ''
              },
              legend:{
                  enabled: false
              },
              xAxis: {
                  categories: ["3:00pm","6:00pm","9:00pm","00:00am","3:00am","6:00am","9:00am","12:00pm"],
              },
              yAxis: {
                  title: {
                      text: ''
                  },
                  labels: {
                      format: " "
                    },
              },
              tooltip: {
                  shared: true,
                  valueSuffix: ' units'
              },
              credits: {
                  enabled: false
              },
              plotOptions: {
                  areaspline: {
                      fillOpacity: 0.5
                  },
                  series: {
                      dataLabels: {
                        enabled: true
                      },
                      animation: false
                  },
              },
              series: [{
                  name: "Temperature",
                  data: [29,30,29,26,24,23,23,24],
                  color: "#fff5cc"
              }]
          });
      }
    }
    getWeatherDemo();
    $('#main-con').show();
});
function changeFahtoCelsius(fahrenheit)
{
    return  Math.round(((fahrenheit-32)*5)/9);
}
$('#main-con').hide();
