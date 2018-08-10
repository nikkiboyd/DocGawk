import DoctorService from './doctor-service.js';

$(document).ready(function() {
  $('#find-doctor-by-name').click(function(event) {
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();

      let doctorService = new DoctorService();
      let promise = doctorService.getPortlandDoctorsByName(firstName, lastName);
      promise.then(function(response) {
        let body = JSON.parse(response);
        for (let i = 0; i < body.data.length; i++){
          console.log(body.data[i].practices[i]);
          $('.doctor-matches').append(`<li>${body.data[i].practices[i].name}</li>`);
        }
      }, function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });

    $('#find-doctor-by-symptom').click(function(event) {
      event.preventDefault();
      let symptom = $('#symptom').val();

        let doctorService = new DoctorService();
        let promise = doctorService.getPortlandDoctorsBySymptom(symptom);
        promise.then(function(response) {
          let body = JSON.parse(response);
          for (let i = 0; i < body.data.length; i++){
            console.log(body.data[i].practices[i]);
            $('.doctor-matches').append(`<li>${body.data[i].practices[i].name}</li>`);
          }
        }, function(error) {
          $('.errors').text(`There was an error processing your request: ${error.message}`);
        });
      });
});
