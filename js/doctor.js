var apiKey = require('./../.env').apiKey;

function User() {
}

var doctorArray = [];

User.prototype.getDoctors = function(symptom, range, location, codeAddress, displayDoctors) {
  codeAddress(location)
    .then(function(response) {
      var lat = response[0].geometry.location.lat().toFixed(4);
      var lng = response[0].geometry.location.lng().toFixed(4);
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=' + lat + ',' + lng + ',' + range + '&skip=0&limit=20&user_key=' + apiKey)
      .then(function(response) {
        response.data.forEach(function(element) {
          doctorArray.push( {
            firstName: element.profile.first_name,
            middleName: element.profile.middle_name,
            lastName: element.profile.last_name,
            title: element.profile.title,
            practice: element.practices.name,
            website: element.practices.website,
            bio: element.profile.bio
          });
        });
        doctorArray.forEach(function(doctor) {
          if (doctor.firstName != undefined) {
            doctor.firstName = doctor.firstName;
          } else {
            doctor.firstName = "";
          }
          if (doctor.middleName != undefined) {
            doctor.middleName = doctor.middleName;
          } else {
            doctor.middleName = "";
          }
          if (doctor.lastName != undefined) {
            doctor.lastName = doctor.lastName;
          } else {
            doctor.lastName = "";
          }
          if (doctor.title != undefined) {
            doctor.title = doctor.title;
          } else {
            doctor.title = "";
          }
          if (doctor.practice != undefined) {
            doctor.practice = doctor.practice;
          } else {
            doctor.practice = "No practice listed";
          }
          if (doctor.website != undefined) {
            doctor.website = doctor.website;
          } else {
            doctor.website = "Website: N/A";
          }
          if (doctor.bio != undefined) {
            doctor.bio = doctor.bio;
          } else {
            doctor.bio = "Bio: N/A";
          }
        });
        console.log(doctorArray);
        displayDoctors(doctorArray);
      });
    });
};

exports.userModule = User;
