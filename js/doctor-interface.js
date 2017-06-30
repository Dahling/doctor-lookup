var User = require('./../js/user.js').userModule;
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {

  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showDoctors").empty();

    var currentUserObject = new User();
    var location = $("#location").val();
    var symptom = $("#symptom").val();

    currentUserObject.getDoctors(symptom, 'united healthcare');
  });
});
