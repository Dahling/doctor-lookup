var User = require('./../js/user.js').userModule;
var Doctor = require('./../js/doctor.js').doctorModule;
var Insurance = require('./../js/insurance.js').insuranceModule;


var insuranceSelection = function(array) {
  array.forEach(function(data) {
    $("#insurance").append('<option value="'+ data.id +'">'+ data.name +'</option>');
  });
};


$(document).ready(function() {
  var currentUserObject = new User();
  currentUserObject.getInsurances();

  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showDoctors").empty();
    var location = $("#location").val();
    var symptom = $("#symptom").val();
    currentUserObject.getDoctors(symptom, 'united healthcare');
  });
});
