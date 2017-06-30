var User = require('./../js/doctor.js').userModule;

$(document).ready(function() {

  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showDoctors").empty();

    var currentUserObject = new User();
    var location = $("#location").val();
    var symptom = $("#symptom").val();
  });
});
