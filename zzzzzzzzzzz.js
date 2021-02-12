function map_in_xxxx() {
   var shimogo = '9GPF+GG';
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 4,
     center: shimogo
   });

   var contentString = '<div id="content">'+
       '<h1 id="firstHeading" class="firstHeading">Tokyoだべ</h1>'+
       '<div id="bodyContent">'+
       '<p><b>Tokyo</b>は人多いよ〜</p>'+
       '<p>詳細はこちら: <a href="">'+
       'リンクをペッ</a> '+
       '</p>'+
       '</div>';

   var infowindow = new google.maps.InfoWindow({
     content: contentString
   });

   var marker = new google.maps.Marker({
     position: shimogo,
     map: map,
     title: 'shimogo'
   });
   marker.addListener('click', function() {
     infowindow.open(map, marker);
   });
 }