
//step4 making a constructor and then go to app.js to make an instance of it (step5)
//STEP10 now we can pass through latLng and do the samce for zoom
var Map = function( latLng, zoom ){
//step 6, creating a new google object and it takes two arguments. where we want it to sit on the page and inistialize where we want it to start. we have stated in the html that we want it to sit in the div tag. the MAP at the end of new google.maps.map is not connected to var Map
this.googleMap = new google.maps.Map(document.getElementById('map'), {
  center: latLng,
  //step7 make a zoom
  zoom: zoom

})
//step11 making a red marker. it needs a latLng
this.addMarker = function( latLng, label, title ){
  //this takes an object as an argument, it needs to know what map to display on
  var marker = new google.maps.Marker({
    position: latLng, 
    map: this.googleMap,
    //step12 adding a label to a marker
    label: label,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: title
  });
  //step 15 addin for info window.
  return marker;
}
//step 13arguments where we can click, it refers to the entire map, the second arg is the event we are binding it to, third is the callback we want to trigger once it been clicked. REMEBER to call it on app.js

//step14 adding an event and this event.latlng.lat will return the coords of wherever you have clicked on the map. we dont have to call it event, it can be whatever we want. Event it an object going into the callback. the addlistener is a method.
this.bindClick = function(){
  var counter = 1
  google.maps.event.addListener(this.googleMap, 'click', function( userClick ){
     var lat = userClick.latLng.lat();
     var lng= userClick.latLng.lng();
     this.addMarker({lat: lat, lng: lng}, counter.toString() )
     counter += 1
  }.bind(this))
}

//step15 we have call in the app.js but now to create the method. addlistener is a method from google api. 
this.addInfoWindow = function(latLng, title){
  var marker= this.addMarker(latLng, "1", title);
  marker.addListener('click', function(){
    //the InfoWindow is a constructor
    var infoWindow = new google.maps.InfoWindow({
      content: this.title
    });
    infoWindow.open(this.map, marker)
  });
}


};






