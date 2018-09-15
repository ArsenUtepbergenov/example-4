function initMap() {
  var myLatLng = {lat: 56.138895, lng: 40.4231224};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Улица Луначарского, 43'
  });
}
