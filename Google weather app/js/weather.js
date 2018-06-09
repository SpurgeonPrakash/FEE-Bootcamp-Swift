$('#search').click(()=>{
    const place=$('#cname').val();
    $('#searched-place').html(place);
});
const date=moment().format('dddd,h:00 a');                   
$('#day').html(date)

// var currentTime = new Date(),
//       hours = currentTime.getHours(),
//       minutes = currentTime.getMinutes();

// 	if (minutes < 10) {
// 	 minutes = "0" + minutes;
//   }

// 	document.write(hours + ":" + minutes)
