// var connectedLink = "https://api.do-it.org/v1/opportunities\?lat\=51.567526\&lng\=-0.182308\&miles\=2 ";

$.getJSON('/data', function showOps(data){

  var organizations = data.data

  var myLatlng = new google.maps.LatLng(51.567526, -0.182308);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  for (i=0; i<organizations.length; i++){
    (function placeMarker (i){
      lat = JSON.stringify(organizations[i].lat)
      lng = JSON.stringify(organizations[i].lng)
      title = JSON.stringify(organizations[i].title)

      var myLatlng = new google.maps.LatLng(lat, lng);

      var marker = new google.maps.Marker({
          position: myLatlng,
          title: title
      });
      marker.setMap(map);
    })(i);
  };

});

// var org = organisations
// console.log(organisations)
// document.write(org)