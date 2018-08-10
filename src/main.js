import DoctorService from './doctor-service.js';

$(document).ready(function() {
  $('#find-doctor').click(function() {
    let symptom = $('#symptom').val();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    $('#first-name').val("");
    $('#last-name').val("");
    $('#symptom').val("");

      let doctorService = new DoctorService();
      let promise = doctorService.getPortlandDoctors(firstName, lastName, symptom);
      promise.then(function(response) {
        let body = JSON.parse(response);
        for (let i = 0; i < body.data.length; i++){
          $('.doctor-matches').append(`<li>test ${body.data.practices.name}</li>`);
        }
      }, function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });
});
