


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;


function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);

  directionsDisplay.setPanel(document.getElementById('directions-panel'));
  var control = document.getElementById('control');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
}






/*$("#button").click(function() {

  alert("CLICKED");
});*/

function calcRoute() {
  
  var start = document.getElementById('start2').value;
  var end = document.getElementById('end2').value;

  alert(start);
  alert(end);
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.TRANSIT
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      //alert(response.routes[0].legs[0]);



    }

    var myRoute = response.routes[0].legs[0];
 


    


 alert("Duration"+ myRoute.duration.text +"  "+myRoute.distance.text + " Number of STEPS" + myRoute.steps.length);
  for (var i = 0; i < myRoute.steps.length; i++) {
    
     
      //alert(myRoute.steps[i].instructions + "  " +myRoute.steps[i].distance.text);
      alert("Calculating by steps" + i);
     var  myRouteBike  = calcRouteBike(myRoute.steps[i].start_location, myRoute.steps[i].end_location);
      
  }


  });

}

function calcRouteBike( Tstart,Tend) {
  
  var start = Tstart;
  var end = Tend

  var myRouteB;

  var requestT = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.BICYCLING
  };


  directionsService.route(requestT, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //directionsDisplay.setDirections(response);
      //alert(response.routes[0].legs[0]);
      alert("Worked for Bike ")


    }

    myRouteB = response.routes[0].legs[0];
 alert(myRouteB.distance.value);


 alert(myRouteB.distance.text);



  });

  return myRouteB;

}


google.maps.event.addDomListener(window, 'load', initialize);




