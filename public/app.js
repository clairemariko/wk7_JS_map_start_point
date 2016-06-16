//step 2 
var initialize = function(){
  //step9
  var center = { lat: 55.9520, lng: -3.1900 }
  //step 10 now to pass in zoom so in our map.js we only need to pass through zoom as it is set here to 14
  var zoom = 14;
    //step 5 //step10 passing in the center
  var map = new Map( center, zoom )
   //step12 where are we putting the maker?
 // map.addMarker( center, "1" ) 
 map.addMarker ( {lat:55.946963, lng: -3.202077}, "2")


// navigator.geolocation.getCurrentPosition(function(position){
//   var lat =position.coords.latitude;
//   var lng = position.coords.longitude;
//   map.addMarker({lat: lat, lng: lng})
// });
//step 13now calling the function
map.bindClick();
//this is what we are creating an info window now go define it
map.addInfoWindow( center, "My info window" );
map.addInfoWindow({lat:55.946963, lng: -3.202077}, "CODECLAN")
}


//STEP 1when the window is finished loading run the function initialize
window.onload = initialize;