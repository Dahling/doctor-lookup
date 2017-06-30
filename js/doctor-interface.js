var User = require('./../js/doctor.js').userModule;

var displayDoctors = function(doctorArray) {
  if (doctorArray.length === 0) {
    $(".showDoctors").append('<p>No doctors found. Try another search!</p>');
  } else {
    doctorArray.forEach(function(doctor) {
      $(".showDoctors").append('<li>' + doctor.firstName + " " + doctor.middleName + " " + doctor.lastName + '<br>' + doctor.title + '<br>' + doctor.practice + '<br>' + doctor.website + '<br>' + doctor.bio + '</li>');
    });
  }
};
// var Insurance = require('./../js/insurance.js').insuranceModule;

// var insuranceSelection = function(array) {
//   array.forEach(function(data) {
//     $("#insurance").append('<option value="'+ data.id +'">'+ data.name +'</option>');
//   });
// }; //not currently used

// var latLngArray = [];
// var geocoder = new google.maps.Geocoder();
// function codeAddress(address) {
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == 'OK') {
//       // var newLatLng = new LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
//       latLngArray.push( {
//         lat: results[0].geometry.location.lat(),
//         lng: results[0].geometry.location.lng()
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// } //not using this either


$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showDoctors").empty();
    var currentUserObject = new User();
    // var location = $("#address").val();
    // codeAddress(location);
    // console.log(latLngArray);
    var symptom = $("#symptom").val();
    var range = $("#range").val();
    currentUserObject.getDoctors(symptom, range);
  });
});
