var map;
var marker;
var center = {
  lat: 35.780840, // 緯度
  lng: 139.715757 // 経度
};
function initMap() {
 map = new google.maps.Map(document.getElementById('maps'), { // #sampleに地図を埋め込む
     center: center, // 地図の中心を指定
     zoom: 16 // 地図のズームを指定
   });
 
 marker = new google.maps.Marker({ // マーカーの追加
      position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
      icon: './img/gomisample.png'
   });
}


function pin() {
  navigator.geolocation.getCurrentPosition(test2);
}

function test2(position) {

  var geo_text = "緯度:" + position.coords.latitude + "\n";
  geo_text += "経度:" + position.coords.longitude + "\n";
  geo_text += "位置精度:" + position.coords.accuracy + "\n";

  var date = new Date(position.timestamp);

  geo_text += "取得時刻:" + date.toLocaleString() + "にピンをうちました" + "\n";

  alert(geo_text);

  lat1 = position.coords.latitude;
  lng1 = position.coords.longitude;
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat1, lng1),
    map: map,
  });

  }


  //35.781155, 139.714101

  // clickイベントを取得するListenerを追加
  /*google.maps.event.addListener(map, 'click', clickEventFunc);

function clickEventFunc(event) {
  alert(event.latLng.toString());
}
http://www.geekpage.jp/web/google-maps-api/v3/click-event.php
*/