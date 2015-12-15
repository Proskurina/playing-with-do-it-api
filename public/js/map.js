var connectedLink = "http://api.do-it.org/v1/opportunities\?lat\=51.567526\&lng\=-0.182308\&miles\=2 ";

$.getJSON(connectedLink, function showOps(data){

  organizations = data.data.items

  var myLatlng = new google.maps.LatLng(51.567526, -0.182308);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  for (i=0; i<organizations.length; i++){
    (function placeMarker (i){
      lat = JSON.stringify(data.data.items[i].lat)
      lng = JSON.stringify(data.data.items[i].lng)
      title = JSON.stringify(data.data.items[i].title)

      var myLatlng = new google.maps.LatLng(lat, lng);

      var marker = new google.maps.Marker({
          position: myLatlng,
          title: title
      });
      marker.setMap(map);
    })(i);
  };

});