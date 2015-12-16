function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {

  myLat = position.coords.latitude
  myLng = position.coords.longitude;


  var myLatlng = new google.maps.LatLng(myLat, myLng);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var connectedLink = "https://api.do-it.org/v1/opportunities\?lat\=" + myLat + "\&lng\=" + myLng + "\&miles\=2 ";

  $.getJSON(connectedLink, function showOps(data){

    organizations = data.data.items

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
};

getLocation()