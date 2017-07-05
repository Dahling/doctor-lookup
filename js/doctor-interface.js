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

function codeAddress(address) {
  var geocoder = new google.maps.Geocoder();
  return new Promise(function(resolve,reject) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        resolve(results);
      } else {
        reject(status);
      }
    });
  });
}

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showDoctors").empty();
    var currentUserObject = new User();
    var location = $("#address").val();
    var symptom = $("#symptom").val();
    var range = $("#range").val();
    currentUserObject.getDoctors(symptom, range, location, codeAddress, displayDoctors);
  });
});
