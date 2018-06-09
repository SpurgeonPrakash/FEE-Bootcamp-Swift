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
            plotChart();
        });
        const plotChart = () => {
            Highcharts.chart('chart', {
                chart: {
                    type: 'areaspline',
                    width:600,
                    height:200
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
});

function changeFahtoCelsius(fahrenheit)
{
    return  Math.round(((fahrenheit-32)*5)/9);
}