function test() {
  navigator.geolocation.getCurrentPosition(test2);
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

  geo_text += "取得時刻:" + date.toLocaleString() + "\n";

  alert(geo_text);

  }

  function pin() {
    navigator.geolocation.getCurrentPosition(pin2);
  }
  
  function pin2(position) {
  
    var geo_ido = position.coords.latitude;
    var geo_keido = position.coords.longitude;
    //var date = new Date(position.timestamp);
    //var geo1_text += "取得時刻:" + date.toLocaleString() + "\n";

    var mapPosition = {lat: geo_ido, lng: geo_keido};
  

    var markerOptions = {
      map: map,
      position: mapPosition,
    };
    var marker = new google.maps.Marker(markerOptions);
    var alerttext = "ゴミ箱のピンをうちました" 
    alert(alerttext);

  }
  