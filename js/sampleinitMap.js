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
   });
}

/*function pin() {
  //navigator.geolocation.getCurrentPosition(pin2);
  var date = new Date(position.timestamp);
  var alerttext = "取得時刻:" + date.toLocaleString() +"\n";
  alert(alerttext);
  
  map = new google.maps.Map(document.getElementById('maps'), { // #sampleに地図を埋め込む
    center: center, // 地図の中心を指定
    zoom: 19 // 地図のズームを指定
  });

  marker = new google.maps.Marker({ // マーカーの追加
     position: center, // マーカーを立てる位置を指定
     map: map // マーカーを立てる地図を指定
  });
}

function pin2(position) {

  var geo_ido = position.coords.latitude;
  var geo_keido = position.coords.longitude;
  var date = new Date(position.timestamp);

  var mapArea = document.getElementById('maps');
    var mapOptions = {
      center: mapPosition,
      zoom: 16,
    };
  var map = new google.maps.Map(mapArea, mapOptions);


  var mapPosition = {lat: geo_ido, lng: geo_keido};


  var markerOptions = {
    map: map,
    position: mapPosition,
  };
  var marker = new google.maps.Marker(markerOptions);
  var alerttext = "取得時刻:" + date.toLocaleString() + "にゴミ箱のピンをうちました"+"\n";
  alert(alerttext);

}*/

function pin() {
  navigator.geolocation.getCurrentPosition(test2);
  lat1 =  position.coords.latitude;
  lng1 = position.coords.longitud;
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat1, lng1),
    map: map,
    });
}

function test2(position) {

  var geo_text = "緯度:" + position.coords.latitude + "\n";
  geo_text += "経度:" + position.coords.longitude + "\n";
  geo_text += "高度:" + position.coords.altitude + "\n";
  geo_text += "位置精度:" + position.coords.accuracy + "\n";
  geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
  geo_text += "移動方向:" + position.coords.heading + "\n";
  geo_text += "速度:" + position.coords.speed + "\n";

  var date = new Date(position.timestamp);

  geo_text += "取得時刻:" + date.toLocaleString() + "にピンをうちました" + "\n";

  alert(geo_text);

  }


  //35.781155, 139.714101