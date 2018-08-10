import DoctorService from './doctor-service.js';

$(document).ready(function() {
  $('#find-doctor-by-name').click(function(event) {
    event.preventDefault();
    $(".doctor-matches").html("");
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    $('#first-name').val("");
    $("#last-name").val("");

      let doctorService = new DoctorService();
      let promise = doctorService.getPortlandDoctorsByName(firstName, lastName);
      promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body);
        if (body.data.length > 0) {
          for (let i = 0; i < body.data.length; i++){
            $('.doctor-matches').append(`<div class='card'>
                                          <p>${body.data[i].practices[i].name}</p>
                                          <p>Address: <br>${body.data[i].practices[i].visit_address.street}<br>${body.data[i].practices[i].visit_address.city}, ${body.data[i].practices[i].visit_address.state} ${body.data[i].practices[i].visit_address.zip}</p>
                                          <p>Phone: <br> ${body.data[i].practices[i].phones[i].number}
                                          <p>Accepts New Patients: ${body.data[i].practices[i].accepts_new_patients}
                                          <p>Website: ${body.data[i].practices[i].website}`);
          }
        } else if (body.data.length === 0) {
          $('.errors').append('<p>No doctor found</p>');
        }
      }, function(error) {
        console.log(error);
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });

    $('#find-doctor-by-symptom').click(function(event) {
      event.preventDefault();
      $(".doctor-matches").html("");
      let symptom = $('#symptom').val();

        let doctorService = new DoctorService();
        let promise = doctorService.getPortlandDoctorsBySymptom(symptom);
        promise.then(function(response) {
          let body = JSON.parse(response);
          if (body.data.length > 0) {
            for (let i = 0; i < body.data.length; i++){
              $('.doctor-matches').append(`<div class='card'>
                                            <p>${body.data[i].practices[i].name}</p>
                                            <p>Address: <br>${body.data[i].practices[i].visit_address.street}<br>${body.data[i].practices[i].visit_address.city}, ${body.data[i].practices[i].visit_address.state} ${body.data[i].practices[i].visit_address.zip}</p>
                                            <p>Phone: <br> ${body.data[i].practices[i].phones[i].number}
                                            <p>Accepts New Patients: ${body.data[i].practices[i].accepts_new_patients}
                                            <p>Website: ${body.data[i].practices[i].website}`);
            }
          } else if (body.data.length === 0) {
            $('.errors').append('<p>No doctor found</p>');
          }
        }, function(error) {
          $('.errors').text(`There was an error processing your request: ${error.message}`);
        });
      });
});
