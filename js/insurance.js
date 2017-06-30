var apiKey = require('./../.env').apiKey;
var User = require('./../js/user.js').userModule;

function Insurance(id, name) {
  this.id = id;
  this.name = name;
}

var insuranceArray = [];

function getInsurances(){
  $.get('https://api.betterdoctor.com/2016-03-01/insurances?user_key=' + apiKey)
    .then(function(response) {
      response.data.forEach(function(element) {
        var newInsurance = new Insurance(element.uid, element.name);
        insuranceArray.push(newInsurance);
      });
      insuranceSelection(insuranceArray);
    });
  }

exports.insuranceModule = Insurance;
